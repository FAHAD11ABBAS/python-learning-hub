import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { playSuccessChime, playNavigationPop } from '../utils/audio';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [completedTopics, setCompletedTopics] = useState(() => {
    try {
      const saved = localStorage.getItem('python_hub_completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeTopicId, setActiveTopicIdState] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const setActiveTopicId = (id) => {
    playNavigationPop();
    setActiveTopicIdState(id);
  };

  useEffect(() => {
    localStorage.setItem('python_hub_completed', JSON.stringify(completedTopics));
  }, [completedTopics]);

  const toggleComplete = (topicId) => {
    setCompletedTopics(prev => {
      const exists = prev.includes(topicId);
      const updated = exists ? prev.filter(id => id !== topicId) : [...prev, topicId];
      
      if (!exists) {
        playSuccessChime();
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.75 },
          colors: ['#E11D48', '#FBBF24', '#306998', '#10B981']
        });
      }
      return updated;
    });
  };

  const isCompleted = (topicId) => completedTopics.includes(topicId);

  const completionPercentage = Math.round((completedTopics.length / 12) * 100);

  return (
    <ProgressContext.Provider value={{
      completedTopics,
      toggleComplete,
      isCompleted,
      completionPercentage,
      activeTopicId,
      setActiveTopicId,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};
