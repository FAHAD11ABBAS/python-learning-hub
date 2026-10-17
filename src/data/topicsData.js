export const TOPICS = [
  {
    id: 1,
    slug: "introduction-to-python",
    icon: "Terminal",
    level: "beginner",
    estimatedMinutes: 20,
    title: {
      fi: "Johdanto Pythoniin",
      en: "Introduction to Python",
      ar: "مقدمة إلى بايثون"
    },
    summary: {
      fi: "Mitä Python on, tulkattavan ja käännettävän kielen erot sekä koodin suoritusympäristö.",
      en: "What is Python, interpreted vs compiled execution models, and core syntax philosophies.",
      ar: "ما هي لغة بايثون، الفروق بين اللغات المفسرة والمترجمة، وفلسفة البنية النحوية."
    },
    theory: {
      fi: `
### Mikä Python on?
Python on korkean tason, yleiskäyttöinen ja dynaamisesti tyypitetty ohjelmointikieli, jonka kehitti **Guido van Rossum** vuonna 1991. Pythonin kantava filosofia on tiivistetty *The Zen of Python* -kokoelmaan (*import this*): koodin luettavuus ja selkeys ovat ensiarvoisen tärkeitä.

### Tulkattava vs. Käännettävä kieli
* **Käännettävät kielet (esim. C, C++, Rust):** Lähdekoodi käännetään kääntäjällä (compiler) suoraan kohdejärjestelmän konekieleksi (binaaritiedostoksi) ennen suoritusta. Suoritusnopeus on huippuluokkaa, mutta koodi täytyy kääntää erikseen kullekin käyttöjärjestelmälle.
* **Tulkattavat ja tavukoodipohjaiset kielet (Python / CPython):** Python-lähdekoodi (.py) muunnetaan ensin automaattisesti tavukoodiksi (.pyc), jonka jälkeen **Python Virtual Machine (PVM)** suorittaa sen rivi riviltä. Tämä tekee Pythonista täysin alustariippumattoman (Write Once, Run Anywhere).

### Pythonin syntaksi verrattuna C++ / Javaan
Pythonissa ei käytetä puolipisteitä rivien päättämiseen eikä aaltosulkeita koodilohkojen rajaamiseen. Koodilohkot määritellään **sisennyksellä** (4 välilyöntiä). Tämä pakottaa kirjoittamaan siistiä ja luettavaa koodia.
      `,
      en: `
### What is Python?
Python is a high-level, interpreted, general-purpose programming language conceived by **Guido van Rossum** in 1991. Python's core design philosophy emphasizes code readability and simplicity, best captured in *The Zen of Python* (*import this*): *"Readability counts"*.

### Interpreted vs. Compiled Languages
* **Compiled Languages (e.g. C, C++, Rust):** Source code is processed directly into machine binary code by a compiler ahead of time. This yields maximum raw performance, but requires platform-specific compilation.
* **Interpreted & Bytecode Languages (Python / CPython):** Standard Python (CPython) compiles source files into intermediate bytecode (\`.pyc\`), which is then executed line-by-line by the **Python Virtual Machine (PVM)**. This offers true cross-platform portability.

### Python Syntax Comparison with C++ / Java
Python eliminates boilerplate semicolons (\`;\`) and curly braces (\`{}\`). Code blocks are structured using **syntactic whitespace indentation** (strictly 4 spaces), producing readable, human-friendly codebases.
      `,
      ar: `
### ما هي لغة بايثون؟
بايثون هي لغة برمجة عالية المستوى ومتعددة الاستخدامات، تم إنشاؤها بواسطة **جويدو فان روسم** عام 1991. ترتكز فلسفتها على وضوح الكود وقابليته للقراءة، وهو ما يجسده مبدأ *The Zen of Python*: *"قابلية القراءة أهم من أي شيء"*.

### المقارنة: لغة مفسرة أم مترجمة؟
* **اللغات المترجمة (Compiled مثل C++ و Rust):** يتم تحويل الكود بالكامل إلى لغة الآلة الثنائية (Machine Code) بواسطة المترجم قبل التشغيل، مما يمنحها سرعة فائقة لكنها تتطلب إعادة ترجمة لكل نظام تشغيل.
* **اللغات المفسرة وتوليد البايت كود (بايثون / CPython):** تقوم بايثون أولاً بتحويل الكود المصدري إلى بايت كود وسيط (\`.pyc\`)، ثم تقوم الآلة الافتراضية **PVM** بتنفيذه تعليمة تلو الأخرى، مما يوفر مرونة وتشغيلاً على كل المنصات.

### مقارنة بنية بايثون مع C++ وجافا
تتخلص بايثون من الفواصل المنقوطة والأقواس المعقوفة، وتعتمد حصراً على **المسافات البادئة (Indentation)** لتحديد كتل الأوامر البرمجية.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 1: Architecture & Syntax
import sys
import platform

def inspect_environment():
    print("Python-versio:", platform.python_version())
    print("Suoritinarkkitehtuuri:", platform.architecture()[0])
    print("Toteutus:", platform.python_implementation())
    print("Tavukoodin maaginen numero:", sys.version_info[:2])

# Verrataan C++ vs Python syntaksia:
# C++:
# int sum = 0;
# for(int i=1; i<=5; i++) { sum += i; }

# Python idiomatic:
numbers = [1, 2, 3, 4, 5]
total = sum(numbers)
print(f"Lukujen summa: {total}")

if __name__ == "__main__":
    inspect_environment()`,
    proTips: {
      fi: [
        "Käytä aina 4 välilyöntiä sisennystasolle. Älä koskaan sekoita sarkaimia (Tab) ja välilyöntejä keskenään (PEP 8).",
        "Voit lukea Pythonin ohjenuorat suoraan komentoriviltä komennolla: python -c 'import this'",
        "Käytä virtuaaliympäristöjä (venv) riippuvuuksien eristämiseen eri projektien välillä."
      ],
      en: [
        "Always use 4 spaces per indentation level. Never mix tabs and spaces in Python files (PEP 8 standard).",
        "You can inspect Python's design philosophy anytime by running: python -c 'import this'",
        "Always isolate project dependencies using built-in virtual environments: python -m venv .venv"
      ],
      ar: [
        "استخدم دائماً 4 مسافات بادئة لكل مستوى، ولا تخلط إطلاقاً بين زر Tab والمسافات (معيار PEP 8).",
        "يمكنك استعراض مبادئ بايثون التصميمية عبر كتابة الأمر: python -c 'import this'.",
        "احرص على عزل حزم مشاريعك باستخدام البيئات الافتراضية: python -m venv .venv."
      ]
    },
    quiz: {
      question: {
        fi: "Mikä osa CPython-arkkitehtuurissa suorittaa käännetyn tavukoodin (.pyc)?",
        en: "Which component in CPython architecture executes the compiled bytecode (.pyc)?",
        ar: "ما هو المكون المسؤول في معمارية CPython عن تنفيذ البايت كود المترجم؟"
      },
      options: [
        { id: "a", text: { fi: "GCC Compiler", en: "GCC Compiler", ar: "مترجم GCC" } },
        { id: "b", text: { fi: "Python Virtual Machine (PVM)", en: "Python Virtual Machine (PVM)", ar: "آلة بايثون الافتراضية (PVM)" } },
        { id: "c", text: { fi: "Operating System Kernel", en: "Operating System Kernel", ar: "نواة نظام التشغيل" } },
        { id: "d", text: { fi: "LLVM Linker", en: "LLVM Linker", ar: "رابط LLVM" } }
      ],
      correctId: "b",
      explanation: {
        fi: "CPython kääntää koodin ensin tavukoodiksi, jonka jälkeen PVM (Python Virtual Machine) ajaa sen.",
        en: "CPython compiles source code to bytecode instructions, which are executed by the Python Virtual Machine (PVM).",
        ar: "يقوم بايثون بترجمة الكود إلى تعليمات بايت كود وسيطة تتولى آلة بايثون الافتراضية (PVM) تنفيذها."
      }
    }
  },
  {
    id: 2,
    slug: "variables-core-data-types",
    icon: "Boxes",
    level: "beginner",
    estimatedMinutes: 25,
    title: {
      fi: "Muuttujat ja ydintietotyypit",
      en: "Variables & Core Data Types",
      ar: "المتغيرات وأنواع البيانات الأساسية"
    },
    summary: {
      fi: "Muuttujien nimeäminen, dynaaminen tyypitys, muistinhallinta, id()-funktio ja muuttumattomat tyypit.",
      en: "Naming conventions, dynamic typing, memory references with id(), and mutable vs immutable types.",
      ar: "تسمية المتغيرات، النمط الديناميكي للأنواع، إدارة الذاكرة مع id()، والأنواع القابلة للتعديل وغير القابلة."
    },
    theory: {
      fi: `
### Muuttujat ja dynaaminen tyypitys
Pythonissa muuttujan tyyppiä ei ilmoiteta etukäteen. Muuttuja luodaan automaattisesti, kun sille sijoitetaan arvo ensimmäisen kerran.
Python on **vahvasti tyypitetty**, mikä tarkoittaa, että tyyppejä ei muunneta automaattisesti yhteensopimattomissa laskutoimituksissa (esim. \`"ikä: " + 25\` aiheuttaa \`TypeErrorin\`).

### Nimeämiskäytännöt (PEP 8)
* **Muuttujat ja funktiot:** \`snake_case\` (esim. \`kayttajan_ika\`, \`laske_summa\`)
* **Vakiot (Constants):** \`UPPER_CASE\` (esim. \`MAX_CONNECTIONS = 100\`)
* **Luokat:** \`PascalCase\` (esim. \`TiliAsiakas\`)

### Muistinhallinta ja objektiviittaukset
Pythonissa kaikki on olioita (objects). Muuttuja ei sisällä itse arvoa, vaan se on **viittaus (osoitin)** muistissa sijaitsevaan olioon.
* **id()-funktio:** Palauttaa olion yksilöllisen muistiosoitteen kokonaislukuna.
* **is vs ==:** \`==\` vertaa olioiden arvoja, kun taas \`is\` tarkistaa, viittaavatko molemmat täsmälleen samaan muistipaikkaan (\`id(a) == id(b)\`).

### Muuttumattomat (Immutable) vs Muuttuvat (Mutable) tyypit
* **Muuttumattomat:** \`int\`, \`float\`, \`str\`, \`tuple\`, \`bool\`. Jos muuttumattoman arvoa muutetaan, Python luo muistiin kokonaan uuden olion.
* **Muuttuvat:** \`list\`, \`dict\`, \`set\`. Näiden sisältöä voidaan muuttaa samassa muistipaikassa.
      `,
      en: `
### Variables & Dynamic Typing
In Python, variables do not require explicit type declarations. A variable is created the moment an assignment is made (\`x = 42\`).
Python is **strongly typed**: it does not perform implicit unsafe type coercion (e.g. \`"Score: " + 10\` raises a \`TypeError\`).

### PEP 8 Naming Conventions
* **Variables & Functions:** \`snake_case\` (e.g., \`user_balance\`, \`calculate_tax\`)
* **Constants:** \`UPPER_SNAKE_CASE\` (e.g., \`MAX_RETRIES = 5\`)
* **Classes:** \`PascalCase\` (e.g., \`BankAccount\`)

### Memory Model & Object References
In Python, "variables" are simply names bound to objects in memory.
* **The \`id()\` function:** Returns the unique memory address (identity) of an object.
* **Equality vs Identity (\`==\` vs \`is\`):** \`==\` checks whether values match; \`is\` checks whether both variables reference the identical object in memory.

### Mutability: Mutable vs Immutable
* **Immutable:** \`int\`, \`float\`, \`str\`, \`tuple\`, \`bool\`. Modifying them generates a new object in memory.
* **Mutable:** \`list\`, \`dict\`, \`set\`. Their elements can be modified in-place without altering the object's identity.
      `,
      ar: `
### المتغيرات والتعيين الديناميكي
في بايثون، لا تحتاج للإعلان الصريح عن نوع المتغير. يتم إنشاء المتغير تلقائياً بمجرد إسناد قيمة له.
تتميز بايثون بأنها **قوية النوعية (Strongly Typed)**؛ فلا تسمح بالدمج العشوائي بين النصوص والأرقام بدون تحويل صريح.

### معايير التسمية الرسمية (PEP 8)
* **المتغيرات والدوال:** \`snake_case\` (أحرف صغيرة بينها شرطة سفلية: \`user_score\`).
* **الثوابت:** \`UPPER_CASE\` (أحرف كبيرة: \`MAX_USERS = 500\`).
* **الفئات (Classes):** \`PascalCase\` (الحرف الأول كبير: \`BankAccount\`).

### نموذج الذاكرة ودالة id()
المتغيرات في بايثون هي مؤشرات لأسماء تشير إلى كائنات في الذاكرة.
* **دالة \`id()\`:** ترجع العنوان الرقمي الفريد للكائن في الذاكرة.
* **الفرق بين \`==\` و \`is\`:** \`==\` يقارن القيم، بينما \`is\` يتأكد من تطابق المرجع في الذاكرة تماماً.

### القابلية للتعديل (Mutability)
* **غير قابلة للتعديل (Immutable):** \`int\`، \`float\`، \`str\`، \`tuple\`.
* **قابلة للتعديل (Mutable):** \`list\`، \`dict\`، \`set\`.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 2: Variables & Memory Model

# 1. Dynaaminen tyypitys ja tyypin tarkistus
hinta = 99.90          # float
maara = 4              # int
tuote = "Python-kirja" # str
onko_varastossa = True # bool

print(f"Tuote: {tuote} ({type(tuote).__name__})")
print(f"Yhteishinta: {hinta * maara}€")

# 2. Muistiosoitteet ja id()
a = 256
b = 256
print(f"a == b: {a == b}, a is b: {a is b}")
print(f"id(a): {id(a)}, id(b): {id(b)}")

# 3. Muuttumattomuus (Immutable)
teksti = "PythonHub"
vanha_id = id(teksti)
teksti += " Pro"
uusi_id = id(teksti)
print("Luotiinko uusi olio muistiin?", vanha_id != uusi_id)

# 4. Muuttuva lista (Mutable)
lista_a = [10, 20, 30]
lista_b = lista_a      # Sama viittaus!
lista_b.append(40)
print("Molemmat muuttuivat:", lista_a is lista_b, lista_a)`,
    proTips: {
      fi: [
        "Python välimuistittaa pienet kokonaisluvut (-5 ... 256) suorituskyvyn parantamiseksi (integer interning).",
        "Varo kopioidessasi listoja: `b = a` vain kopioi viittauksen. Käytä `b = a.copy()` tai `list(a)` tehdäksesi aidon kopion.",
        "Voit tarkistaa muuttujan tyypin suositellusti funktiolla: isinstance(muuttuja, int)."
      ],
      en: [
        "CPython pre-allocates and caches small integers (-5 to 256), meaning identical numbers share the same id().",
        "Be careful with list assignment: `b = a` assigns the reference. Use `b = a.copy()` for shallow copy.",
        "Use `isinstance(obj, type)` rather than `type(obj) == type` to support polymorphism and subclasses."
      ],
      ar: [
        "تحتفظ بايثون بالأرقام الصغيرة من (-5 إلى 256) مسبقاً في الذاكرة لتسريع الأداء (Integer Interning).",
        "احذر من إسناد القوائم بـ `b = a` لأنه ينسخ المرجع فقط؛ استخدم `b = a.copy()` لإنشاء نسخة مستقلة.",
        "استخدم دالة `isinstance(obj, type)` للتحقق من النوع لأنها تدعم التوريث البرمجي."
      ]
    },
    quiz: {
      question: {
        fi: "Mitä tulostuu koodista: x = [1, 2]; y = x; y.append(3); print(len(x))?",
        en: "What is output by: x = [1, 2]; y = x; y.append(3); print(len(x))?",
        ar: "ما ناتج تنفيذ: x = [1, 2]; y = x; y.append(3); print(len(x))؟"
      },
      options: [
        { id: "a", text: { fi: "2", en: "2", ar: "2" } },
        { id: "b", text: { fi: "3", en: "3", ar: "3" } },
        { id: "c", text: { fi: "TypeError", en: "TypeError", ar: "TypeError" } },
        { id: "d", text: { fi: "IndexError", en: "IndexError", ar: "IndexError" } }
      ],
      correctId: "b",
      explanation: {
        fi: "Listat ovat muuttuvia (mutable) ja y = x asettaa molemmat viittaamaan samaan listaan, joten x:n pituus on 3.",
        en: "Lists are mutable. `y = x` binds `y` to the exact same list instance in memory, so appending to `y` modifies `x`.",
        ar: "القوائم كائنات قابلة للتعديل؛ الإسناد y = x يجعل المتغيرين يشيران إلى القائمة نفسها في الذاكرة."
      }
    }
  },
  {
    id: 3,
    slug: "input-and-output",
    icon: "Sliders",
    level: "beginner",
    estimatedMinutes: 20,
    title: {
      fi: "Syöte ja tuloste",
      en: "Input & Output",
      ar: "الإدخال والإخراج"
    },
    summary: {
      fi: "input()-funktio, print()-parametrit (sep, end), erikoismerkit sekä int- ja float-tyyppimuunnokset.",
      en: "The input() function, print() parameters (sep, end), escape sequences, and numeric type conversions.",
      ar: "دالة input()، خيارات دالة print() (sep و end)، محارف الهروب والتحويل الرقمي."
    },
    theory: {
      fi: `
### input()-funktio ja tyyppimuunnos
Pythonin \`input()\`-funktio pysäyttää ohjelman suorituksen ja odottaa käyttäjän syötettä päätteeltä.
**Tärkeää:** \`input()\` palauttaa **aina** merkkijonon (\`str\`), vaikka käyttäjä syöttäisi numeroita! Jos halutaan tehdä laskutoimituksia, syöte on muunnettava erikseen:
* \`int(syote)\`: Muuntaa kokonaisluvuksi.
* \`float(syote)\`: Muuntaa liukuluvuksi (desimaaliluvuksi).

### print()-funktion erikoisominaisuudet
Oletuksena \`print()\` tulostaa annettujen arvojen väliin välilyönnin ja lisää loppuun rivinvaihdon. Tätä käyttäytymistä voidaan mukauttaa kahdella parametrilla:
* **sep="..."**: Määrittää erottimen tulostettavien arvojen väliin (esim. \`sep=" - "\` tai \`sep="," \`).
* **end="..."**: Määrittää, mitä tulosteen loppuun lisätään rivinvaihdon (\`\\n\`) sijasta (esim. \`end=" "\` jatkaa samalle riville).

### Pakosarjat (Escape characters)
Merkkijonoissa käytetään kenoviivaa (\`\\\`) erikoismerkkien esittämiseen:
* \`\\n\`: Rivinvaihto (Newline)
* \`\\t\`: Sarkain (Tabulator)
* \`\\\\\`: Kenoviiva itse
* \`\\"\` ja \`\\'\`: Lainausmerkit merkkijonon sisällä ilman merkkijonon päättämistä
      `,
      en: `
### The input() Function & Explicit Conversion
The built-in \`input(prompt)\` reads a line from the user.
**Crucial Rule:** \`input()\` **always** returns a string (\`str\`), even if the user types numeric digits. Performing arithmetic requires explicit type casting:
* \`int(val)\`: Converts to integer.
* \`float(val)\`: Converts to floating-point number.

### Advanced print() Parameters
By default, \`print()\` separates items with a single space and ends with a newline:
* **sep="..."**: Specifies the delimiter between arguments (e.g. \`sep=" | "\` or \`sep=""\`).
* **end="..."**: Controls what is printed at the very end instead of the default \`\\n\` (e.g. \`end=" -> "\`).

### Escape Characters
Escape sequences allow embedding non-printable and special characters:
* \`\\n\`: Newline
* \`\\t\`: Horizontal tab
* \`\\\\\`: Literal backslash
* \`\\"\` and \`\\'\`: Escaped quotes
      `,
      ar: `
### دالة input() والتحويل الصريح
تقرأ دالة \`input()\` البيانات المدخلة من المستخدم عبر الطرفية.
**قاعدة ذهبية:** ترجع دالة \`input()\` **دائماً** قيمة نصية (\`str\`)، حتى لو قام المستخدم بكتابة أرقام! لإجراء العمليات الحسابية يجب التحويل:
* \`int(x)\`: لتحويل القيمة إلى عدد صحيح.
* \`float(x)\`: لتحويل القيمة إلى عدد عشري.

### خيارات دالة print() المتقدمة
* **sep="..."**: المعامل الفاصل بين القيم المطبوعة (افتراضياً مسافة واحدة).
* **end="..."**: ما يتم طباعته في نهاية السطر (افتراضياً سطر جديد \`\\n\`).

### محارف الهروب (Escape Characters)
* \`\\n\`: سطر جديد.
* \`\\t\`: مسافة جدولة (Tab).
* \`\\\\\`: طباعة الشرطة المائلة نفسها.
* \`\\"\` و \`\\'\`: طباعة علامات الاقتباس داخل النص.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 3: Input & Output Mastery

# 1. input() ja tyyppimuunnos turvallisesti
kayttajan_syote = "25" # Simuloitu input()
ika = int(kayttajan_syote)
syntymavuosi = 2026 - ika
print(f"Ikäsi on {ika} vuotta, synnyit noin vuonna {syntymavuosi}.")

# 2. print()-funktion sep ja end parametrit
print("Python", "Developer", "Hub", sep=" -> ")
print("Lasketaan", end=": ")
print("1", "2", "3", sep=", ", end="... Valmis!\\n")

# 3. Erikoismerkkien käyttö
raportti = "Nimi:\\tMatti Meikäläinen\\nArvosana:\\t5/5\\nPolku:\\tC:\\\\kurssit\\\\python"
print(raportti)

# 4. f-string muotoilu tarkkuudella
pii = 3.1415926535
print(f"Piin arvo kahdella desimaalilla: {pii:.2f}")`,
    proTips: {
      fi: [
        "Käytä f-stringejä (f'Tulos: {arvo}') vanhojen %- ja .format()-menetelmien sijaan: ne ovat nopeampia ja huomattavasti luettavampia.",
        "Suojaa input()-muunnokset aina try-except ValueError -rakenteella, jotta ohjelma ei kaadu virheelliseen syötteeseen.",
        "Voit tulostaa raakamerkkijonoja (raw strings) etuliitteellä r (esim. r'C:\\kansio\\tiedosto.txt') ilman escape-ongelmia."
      ],
      en: [
        "Prefer modern f-strings (\`f'Result: {val:.2f}'\`) over legacy \`%\` formatting and \`.format()\`.",
        "Always guard numeric \`input()\` conversions with a \`try-except ValueError\` block to prevent crashing on invalid inputs.",
        "Use raw strings with prefix \`r\` (e.g. \`r'C:\\path\\name'\`) when dealing with Windows paths or regular expressions."
      ],
      ar: [
        "استخدم نصوص f-strings الحديثة (f'{val}') لأنها الأسرع والأكثر وضوحاً مقارنة بالطرق القديمة.",
        "احرص دائماً على إحاطة تحويل الأرقام بـ try-except لتجنب انهيار البرنامج إذا أدخل المستخدم نصاً.",
        "استخدم النصوص الخام ببادئة r (مثل r'C:\\folder\\file') عند التعامل مع مسارات الملفات."
      ]
    },
    quiz: {
      question: {
        fi: "Mitä tulostaa: print('A', 'B', 'C', sep='-', end='!')?",
        en: "What is output by: print('A', 'B', 'C', sep='-', end='!')?",
        ar: "ما ناتج تنفيذ: print('A', 'B', 'C', sep='-', end='!')؟"
      },
      options: [
        { id: "a", text: { fi: "A B C-!", en: "A B C-!", ar: "A B C-!" } },
        { id: "b", text: { fi: "A-B-C!", en: "A-B-C!", ar: "A-B-C!" } },
        { id: "c", text: { fi: "A-B-C\\n!", en: "A-B-C\\n!", ar: "A-B-C\\n!" } },
        { id: "d", text: { fi: "TypeError", en: "TypeError", ar: "TypeError" } }
      ],
      correctId: "b",
      explanation: {
        fi: "sep='-' erottaa kirjaimet viivalla (A-B-C) ja end='!' lisää loppuun huutomerkin rivinvaihdon sijasta.",
        en: "sep='-' places dashes between each item, and end='!' terminates the print statement without a newline.",
        ar: "يقوم sep='-' بفصل العناصر بشرطة، ويضع end='!' علامة التعجب في النهاية دون سطر جديد."
      }
    }
  },
  {
    id: 4,
    slug: "string-processing",
    icon: "Type",
    level: "beginner",
    estimatedMinutes: 25,
    title: {
      fi: "Merkkijonojen käsittely",
      en: "String Processing",
      ar: "معالجة النصوص"
    },
    summary: {
      fi: "len(), viipalointi [start:stop:step], merkkijonon kertominen ja tärkeimmät sisäänrakennetut metodit.",
      en: "len(), slicing with [start:stop:step], string multiplication, and core string manipulation methods.",
      ar: "دالة len()، تشريح النصوص [start:stop:step]، تكرار النصوص وأهم الدوال الجاهزة."
    },
    theory: {
      fi: `
### Merkkijonojen perusominaisuudet
Pythonissa merkkijono (\`str\`) on **muuttumaton (immutable)** peräkkäisten merkkien sarja.
* **len(s):** Palauttaa merkkijonon pituuden (merkkien lukumäärän).
* **Indeksointi:** Indeksit alkavat nollasta (\`0\`). Python tukee myös negatiivista indeksointia: \`-1\` on viimeinen merkki.
* **Merkkijonon kertominen (\`*\`):** Merkkijono voidaan toistaa kertolaskulla: \`"Ha" * 3\` tuottaa \`"HaHaHa"\`.

### Viipalointi (Slicing): [start : stop : step]
Viipalointi on yksi Pythonin tehokkaimmista ominaisuuksista:
* **start:** Aloitusindeksi (sisältyy tulokseen, oletus 0).
* **stop:** Lopetusindeksi (**EI** sisälly tulokseen!).
* **step:** Askelväli (oletus 1). Jos askel on negatiivinen, viipalointi etenee takaperin!
* *Esimerkki käännöksestä:* \`s[::-1]\` kääntää merkkijonon toisinpäin.

### Tärkeimmät sisäänrakennetut metodit
* \`.upper()\` ja \`.lower()\`: Muuntaa isot/pienet kirjaimet.
* \`.strip()\`: Poistaa tyhjät merkit (välilyönnit, tabit, rivinvaihdot) alusta ja lopusta.
* \`.replace(old, new)\`: Korvaa alimerkkijonon toisella.
* \`.split(separator)\`: Jakaa merkkijonon listaksi erotinmerkin kohdalta.
* \`separator.join(list)\`: Yhdistää listan alkiot yhtenäiseksi merkkijonoksi.
* \`.find(sub)\` ja \`.startswith(prefix)\`: Hakee alimerkkijonon olemassaoloa.
      `,
      en: `
### Core String Fundamentals
In Python, strings (\`str\`) are **immutable** ordered sequences of Unicode characters.
* **len(s):** Returns total character count.
* **Indexing:** Zero-indexed from the left (\`0, 1, 2...\`) and negative-indexed from the right (\`-1, -2...\`).
* **String Multiplication (\`*\`):** Replicates strings: \`"=" * 10\` yields \`"=========="\`.

### Advanced Slicing: [start : stop : step]
* **start:** Inclusion index (defaults to 0).
* **stop:** Exclusive stop index (the slice stops just before this position).
* **step:** Stride/stride direction (defaults to 1).
* *Reversal idiom:* \`s[::-1]\` efficiently reverses a string.

### Core Built-in String Methods
* \`.upper()\` / \`.lower()\`: Case manipulation.
* \`.strip()\`: Strips leading and trailing whitespace.
* \`.replace(old, new)\`: Replaces substrings.
* \`.split(delimiter)\`: Splits a string into a list of tokens.
* \`delimiter.join(list)\`: Joins iterable elements into a single string.
* \`.startswith(prefix)\` / \`.endswith(suffix)\`: Boolean prefix/suffix inspection.
      `,
      ar: `
### أساسيات معالجة النصوص
النصوص في بايثون كائنات **غير قابلة للتعديل (Immutable)** وتتبع نظام الترميز العالمي Unicode.
* **دالة len(s):** تحسب عدد الأحرف.
* **الفهرسة:** تبدأ من اليسار بـ 0، ومن اليمين بأرقام سالبة (-1 للحرف الأخير).
* **تكرار النص (\`*\`):** تكرار النص بعدد محدد: \`"Py" * 3\` ينتج \`"PyPyPy"\`.

### تشريح النصوص (Slicing): [start : stop : step]
* **start:** فهرس البداية (مشمول).
* **stop:** فهرس النهاية (غير مشمول).
* **step:** مقدار القفزة أو اتجاهها.
* *عكس النص بالكامل:* \`s[::-1]\`.

### أهم دوال النصوص الجاهزة
* \`.strip()\`: إزالة المسافات الفارغة من البداية والنهاية.
* \`.replace(old, new)\`: استبدال أجزاء من النص.
* \`.split(delim)\`: تقسيم النص إلى قائمة بناءً على فاصل.
* \`delim.join(list)\`: دمج قائمة نصوص في نص واحد.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 4: String Slicing & Methods

kurssi = "Ohjelmointi Pythonilla"

# 1. Pituus ja viipalointi [start:stop:step]
print(f"Pituus: {len(kurssi)}")
print(f"Alku (0..12): {kurssi[0:12]}")
print(f"Joka toinen merkki: {kurssi[::2]}")
print(f"Takaperin käännettynä: {kurssi[::-1]}")

# 2. Merkkijonon kertominen ja reunus
jakaja = "=" * 30
print(jakaja)
print("PYTHON DEVELOPER GUIDE".center(30))
print(jakaja)

# 3. Metodit: strip, replace, split ja join
raaka_data = "  omena,banaani,appelsiini,mango  "
siistitty = raaka_data.strip()
hedelmat = siistitty.split(",")
print("Listana:", hedelmat)

# Yhdistetään takaisin isolla kirjoitettuna
tulos = " | ".join([h.strip().upper() for h in hedelmat])
print("Muotoiltuna:", tulos)`,
    proTips: {
      fi: [
        "Koska merkkijonot ovat muuttumattomia, mikään metodi ei muuta alkuperäistä merkkijonoa vaan palauttaa aina uuden olion.",
        "Käytä stringien yhdistämiseen listassa aina ''.join(lista) -metodia '+' operaattorin sijaan: join() on huomattavasti tehokkaampi O(N) vs O(N^2).",
        "Palindromin voi tarkistaa yhdellä rivillä: sana == sana[::-1]"
      ],
      en: [
        "Strings are immutable in Python; methods like \`.upper()\` or \`.replace()\` return new string instances.",
        "Always use \`''.join(list)\` to concatenate collections of strings rather than looping with \`+\` (linear O(N) vs quadratic O(N²)).",
        "Test for palindromes elegantly in one line: \`word == word[::-1]\`."
      ],
      ar: [
        "النصوص كائنات غير قابلة للتعديل؛ أي دالة تعديل ترجع كائناً نصياً جديداً تماماً.",
        "استخدم دائمًا \`''.join(list)\` لدمج سلاسل النصوص الطويلة بدلاً من معامل \`+\` لتحقيق أداء O(N) فائق السرعة.",
        "يمكنك التحقق من الكلمات المتناظرة (Palindromes) بسطر واحد: word == word[::-1]."
      ]
    },
    quiz: {
      question: {
        fi: "Mitä s[1:6:2] palauttaa merkkijonosta s = 'PythonHub'?",
        en: "What does s[1:6:2] evaluate to for s = 'PythonHub'?",
        ar: "ما ناتج s[1:6:2] للنص s = 'PythonHub'؟"
      },
      options: [
        { id: "a", text: { fi: "'pto'", en: "'pto'", ar: "'pto'" } },
        { id: "b", text: { fi: "'yhn'", en: "'yhn'", ar: "'yhn'" } },
        { id: "c", text: { fi: "'Pth'", en: "'Pth'", ar: "'Pth'" } },
        { id: "d", text: { fi: "'yhu'", en: "'yhu'", ar: "'yhu'" } }
      ],
      correctId: "b",
      explanation: {
        fi: "Indeksi 1 on 'y', indeksi 3 on 'h', indeksi 5 on 'n'. Indeksi 6 ei sisälly. Tulos on 'yhn'.",
        en: "Index 1 is 'y', step by 2 gives index 3 ('h'), step by 2 gives index 5 ('n'). Stop at 6 is exclusive: result is 'yhn'.",
        ar: "الفهرس 1 هو 'y'، والقفزة بـ 2 تعطي الفهرس 3 وهو 'h'، ثم الفهرس 5 وهو 'n'، والحد 6 غير مشمول: الناتج 'yhn'."
      }
    }
  },
  {
    id: 5,
    slug: "control-structures",
    icon: "GitFork",
    level: "beginner",
    estimatedMinutes: 25,
    title: {
      fi: "Ohjausrakenteet",
      en: "Control Structures",
      ar: "هياكل التحكم والشروط"
    },
    summary: {
      fi: "if, if-else, if-elif-else, sisennyksen säännöt sekä loogiset ja vertailuoperaattorit.",
      en: "if, if-else, if-elif-else branching, PEP 8 indentation rules, logical and relational operators.",
      ar: "الجمل الشرطية if و elif و else، قواعد الإزاحة، والمعاملات المنطقية والمقارنة."
    },
    theory: {
      fi: `
### Ehtorakenteet: if, elif, else
Ehtorakenteiden avulla ohjelma voi tehdä päätöksiä ja valita eri suorituspolkuja syötteiden tai tilojen perusteella.
* **if ehto:** Suorittaa lohkon, jos ehto on tosi (\`True\`).
* **elif toinen_ehto:** (*else if*) Tarkistetaan vain, jos edelliset ehdot olivat epätosia.
* **else:** Suoritetaan, jos yksikään aiemmista ehdoista ei täyttynyt.

### Sisennyksen säännöt (Indentation)
Toisin kuin useimmissa muissa kielissä, Pythonissa koodilohkot määritellään **ainoastaan sisennyksellä**.
* Jokaisen ehdon perään tulee kaksoispiste (\`:\`).
* Lohkon koodi sisennetään tasan **4 välilyöntiä**.
* Virheellinen sisennys aiheuttaa välittömän \`IndentationError\`-käännösvirheen.

### Vertailu- ja loogiset operaattorit
* **Vertailuoperaattorit:** \`==\` (yhtäsuuri), \`!=\` (erisuuri), \`<\`, \`>\`, \`<=\`, \`>=\`.
* **Loogiset operaattorit:** \`and\` (molemmat tosia), \`or\` (ainakin toinen tosi), \`not\` (negaatio).
* **Jäsenyysoperaattorit:** \`in\` ja \`not in\` (tarkistaa, löytyykö alkio sarjasta).
* **Ketjutetut vertailut:** Pythonissa voi kirjoittaa matematiikan tapaan: \`18 <= ika < 65\`.
      `,
      en: `
### Conditional Branching: if, elif, else
Control structures allow programs to execute specific code blocks depending on runtime boolean states.
* **if condition:** Executes when expression evaluates to truthy.
* **elif alternative:** Evaluated strictly if all preceding conditions were falsy.
* **else:** Default fallback when all conditions fail.

### Python Indentation Rules
Python enforces structural indentation instead of curly brackets:
* Every conditional statement ends with a colon (\`:\`).
* The body must be indented uniformly (4 spaces recommended).
* Misalignment raises an immediate \`IndentationError\`.

### Relational & Logical Operators
* **Relational:** \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`.
* **Logical:** \`and\`, \`or\`, \`not\`.
* **Membership:** \`in\` and \`not in\`.
* **Chained Comparisons:** Python supports intuitive chaining: \`0 <= score <= 100\`.
      `,
      ar: `
### التفرع الشرطي: if و elif و else
تسمح الجمل الشرطية بتنفيذ مسارات برمجية مختلفة وفقاً للشروط المنطقية.
* **if:** يتم تنفيذ الكود التابع لها إذا تحقق الشرط وكان صواباً (\`True\`).
* **elif:** يتم فحصها بالترتيب فقط في حال عدم تحقق الشروط السابقة.
* **else:** المسار الافتراضي عند فشل جميع الشروط السابقة.

### قواعد المسافات البادئة (Indentation)
* تنتهي كل جملة شرطية بنقطتين متعامدتين (\`:\`).
* يجب أن تتم إزاحة الكتل البرمجية بمقدار 4 مسافات.
* أي خلل في المسافات البادئة ينتج عنه خطأ فوري \`IndentationError\`.

### معاملات المقارنة والمعاملات المنطقية
* **المقارنة:** \`==\`، \`!=\`، \`<\`، \`>\`، \`<=\`، \`>=\`.
* **المنطقية:** \`and\`، \`or\`، \`not\`.
* **سلاسل المقارنة الرياضية:** تتيح بايثون كتابة \`18 <= age < 65\`.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 5: Control Structures

pisteet = 84

# 1. if-elif-else arvosanan määritykseen
if pisteet >= 90:
    arvosana = 5
elif pisteet >= 80:
    arvosana = 4
elif pisteet >= 70:
    arvosana = 3
elif pisteet >= 60:
    arvosana = 2
elif pisteet >= 50:
    arvosana = 1
else:
    arvosana = 0

print(f"Pisteet: {pisteet} -> Kurssiarvosana: {arvosana}")

# 2. Ketjutetut vertailut ja loogiset operaattorit
ika = 22
opiskelija = True

if 18 <= ika <= 29 and opiskelija:
    print("Olet oikeutettu opiskelija-alennukseen!")

# 3. Ternary operator (ehdollinen lauseke yhdellä rivillä)
status = "Hyväksytty" if arvosana > 0 else "Hylätty"
print(f"Kurssistatus: {status}")

# 4. in-operaattori tarkistuksiin
sallitut_roolit = ["admin", "editor", "teacher"]
kayttajan_rooli = "teacher"

if kayttajan_rooli in sallitut_roolit:
    print(f"Pääsy sallittu roolille: {kayttajan_rooli}")`,
    proTips: {
      fi: [
        "Vältä liian syviä sisäkkäisiä if-rakenteita (Guard Clauses): palauta tai poistu funktiosta heti, kun virhe-ehto havaitaan.",
        "Pythonissa 'truthy' ja 'falsy' arvot ovat keskeisiä: tyhjä lista [], luku 0 ja None tulkitaan automaattisesti Falseksi.",
        "Käytä yhden rivin ehdollista sijoitusta: 'arvo = x if ehto else y'."
      ],
      en: [
        "Use Guard Clauses to avoid deeply nested conditionals (exit early upon encountering edge cases).",
        "Master Python falsy values: empty collections (\`[]\`, \`{}\`, \`''\`), number \`0\`, and \`None\` evaluate to \`False\`.",
        "Leverage ternary expressions for clean variable assignments: \`val = a if condition else b\`."
      ],
      ar: [
        "تجنب تداخل جمل if المعقدة واستخدم شروط الحماية (Guard Clauses) للخروج المبكر.",
        "افهم القيم الصفرية والفارغة (Falsy values): القوائم الفارغة [] والعدد 0 و None تعتبر جميعها تلقائياً False.",
        "استخدم العامل الثلاثي الشرطي المختصر: \`val = a if condition else b\`."
      ]
    },
    quiz: {
      question: {
        fi: "Mitkä seuraavista arvoista tulkitaan Pythonissa ehdossa Falseksi (Falsy)?",
        en: "Which of the following values evaluates to False (falsy) in a Python conditional?",
        ar: "أي من القيم التالية تُعتبر سالبة (Falsy) في شروط بايثون؟"
      },
      options: [
        { id: "a", text: { fi: "[0]", en: "[0]", ar: "[0]" } },
        { id: "b", text: { fi: "\"False\"", en: "\"False\"", ar: "\"False\"" } },
        { id: "c", text: { fi: "[] (tyhjä lista)", en: "[] (empty list)", ar: "[] (قائمة فارغة)" } },
        { id: "d", text: { fi: "{\"arvo\": False}", en: "{\"key\": False}", ar: "{\"key\": False}" } }
      ],
      correctId: "c",
      explanation: {
        fi: "Tyhjä kokoelma kuten [] tai '' on Pythonissa falsy. [0] ja 'False' ovat epätyhjiä, joten ne ovat True.",
        en: "Empty collections such as \`[]\` or \`\"\"\` evaluate to \`False\`. A list containing \`[0]\` is non-empty and therefore truthy.",
        ar: "المجموعات الفارغة مثل [] أو النصوص الفارغة تعتبر False. أما [0] فهي قائمة غير فارغة وتعتبر True."
      }
    }
  },
  {
    id: 6,
    slug: "loops-and-iteration",
    icon: "Repeat",
    level: "intermediate",
    estimatedMinutes: 25,
    title: {
      fi: "Silmukat ja iteraatio",
      en: "Loops & Iteration",
      ar: "الحلقات والتكرار"
    },
    summary: {
      fi: "while vs for, range()-funktio, break, continue, pass sekä Pythonin ainutlaatuinen loop-else.",
      en: "while vs for loops, the range() sequence, break, continue, pass, and Python's unique loop-else clause.",
      ar: "حلقات while و for، دالة range()، break و continue و pass، وجملة loop-else الفريدة في بايثون."
    },
    theory: {
      fi: `
### for vs while -silmukat
* **for-silmukka:** Käytetään, kun iteroidaan tunnetun sarjan läpi (lista, merkkijono, monikko, \`range\`). Pythonin for on aidosti *for-each*-silmukka.
* **while-silmukka:** Toistaa koodilohkoa niin kauan kuin annettu ehto pysyy totena (\`True\`). Käytetään, kun toistojen määrää ei tiedetä etukäteen.

### range()-funktio
Generoi lukusarjoja muistitehokkaasti (generaattorityyppisesti):
* \`range(5)\`: 0, 1, 2, 3, 4
* \`range(2, 8)\`: 2, 3, 4, 5, 6, 7
* \`range(10, 0, -2)\`: 10, 8, 6, 4, 2 (askel taaksepäin)

### Silmukan ohjauskomennot
* **break:** Keskeyttää koko silmukan suorituksen välittömästi.
* **continue:** Ohittaa nykyisen kierroksen loput lauseet ja hyppää seuraavaan iteraatioon.
* **pass:** Tyhjä operaatio (placeholder). Ei tee mitään, mutta estää syntaksivirheen tyhjässä lohkossa.

### Pythonin ainutlaatuinen: Silmukan else-lohko (Loop-Else)
Pythonissa sekä \`for\`- että \`while\`-silmukoihin voidaan liittää \`else:\`-lohko!
**Kultainen sääntö:** \`else:\`-lohko suoritetaan **vain ja ainoastaan silloin**, kun silmukka pyörii loppuun asti **ilman että kohdattiin \`break\`-komentoa**. Jos silmukasta poistutaan \`break\`-lauseella, \`else\`-lohko ohitetaan.
Tämä sopii täydellisesti hakualgoritmeihin ilman erillistä lippumuuttujaa (flag variable).
      `,
      en: `
### for vs. while Loops
* **for loop:** Used to iterate over any sequence (iterables such as lists, strings, ranges, dictionaries). In Python, \`for\` is conceptually a *for-each* loop.
* **while loop:** Executes repeatedly as long as a boolean condition remains \`True\`. Best suited when iteration count is indefinite.

### The range() Constructor
Generates immutable arithmetic progressions efficiently without allocating the full list in memory:
* \`range(n)\`: 0 through n-1.
* \`range(start, stop)\`: start up to (exclusive) stop.
* \`range(start, stop, step)\`: Custom stride and direction.

### Loop Control Directives
* **break:** Immediately terminates the enclosing loop.
* **continue:** Skips the rest of current cycle and proceeds to the next iteration.
* **pass:** No-op syntactic placeholder for empty code blocks.

### The Unique Python Loop-Else Clause
Both \`for\` and \`while\` loops support an attached \`else:\` clause!
**The Golden Rule:** The \`else\` block executes **if and only if** the loop completed all iterations naturally **without encountering a \`break\` statement**. If a \`break\` occurs, the \`else\` block is completely bypassed. This removes the need for boolean flag variables in search routines.
      `,
      ar: `
### الفرق بين حلقات for و while
* **حلقة for:** تستخدم للتكرار عبر عناصر أي متتالية (قائمة، نص، نطاق أرقام).
* **حلقة while:** تكرر تنفيذ الكود طالما ظل الشرط محققاً (\`True\`).

### دالة range() الفعالة
* \`range(stop)\`: تولد أرقاماً من 0 حتى stop - 1.
* \`range(start, stop, step)\`: بداية ونهاية ومقدار القفز، دون حجز مساحة إضافية في الذاكرة.

### أوامر التحكم في التكرار
* **break:** إنهاء وخروج فوري من الحلقة بالكامل.
* **continue:** تخطي ما تبقى من الدورة الحالية والانتقال للدورة التالية مباشرة.
* **pass:** تعليمة لا تفعل شيئاً، تُستخدم كعنصر نائب لتفادي الأخطاء النحوية.

### جملة loop-else الفريدة في بايثون
تدعم بايثون وضع كتلة \`else:\` مع حلقات \`for\` و \`while\`.
**القاعدة الذهبية:** يتم تنفيذ كتلة \`else\` **فقط وحصرياً إذا انتهت الحلقة طبيعياً دون مواجهة أي تعليمة \`break\`**. إذا تم الخروج بـ \`break\`، يتم تخطي \`else\` تماماً.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 6: Loops & The Loop-Else Pattern

# 1. for-silmukka ja range(start, stop, step)
print("Parilliset luvut väliltä 2..10:")
for num in range(2, 11, 2):
    print(num, end=" ")
print()

# 2. Hakualgoritmi Pythonin uniikilla loop-else rakenteella
opiskelijat = ["Aino", "Mikko", "Elena", "Kari", "Saara"]
etsittava = "Elena"

for nimi in opiskelijat:
    if nimi == etsittava:
        print(f"Löytyi opiskelija: {nimi}!")
        break
else:
    # Suoritetaan VAIN jos silmukka käytiin loppuun ilman break-komentoa!
    print(f"Opiskelijaa '{etsittava}' ei löytynyt kurssilta.")

# 3. while-silmukka ja continue
laskuri = 0
print("Parittomat luvut alle 10:")
while laskuri < 10:
    laskuri += 1
    if laskuri % 2 == 0:
        continue # Hypätään parillisten yli
    print(laskuri, end=" ")
print()`,
    proTips: {
      fi: [
        "Käytä enumerate(lista) -funktiota, jos tarvitset sekä alkion indeksin että sen arvon: for idx, arvo in enumerate(lista):",
        "Käytä zip()-funktiota kahden tai useamman listan rinnakkaiseen läpikäyntiin.",
        "Loop-else on Pythonin tehokkain tapa välttää apumuuttujat (found = False) etsinnöissä."
      ],
      en: [
        "Use \`enumerate(iterable)\` whenever you need both the index and value: \`for i, item in enumerate(items):\`.",
        "Use \`zip(list_a, list_b)\` to iterate over multiple collections in lockstep.",
        "The \`loop-else\` idiom eliminates messy boilerplate flag variables like \`found = False\` in search patterns."
      ],
      ar: [
        "استخدم دالة `enumerate(list)` دائماً عندما تحتاج الفهرس والقيمة معاً بدقة.",
        "استخدم دالة `zip()` للمرور بالتوازي على قائمتين أو أكثر في آن واحد.",
        "توفر جملة `loop-else` حلاً أنيقاً يلغي الحاجة للمتغيرات المنطقية الإضافية (مثل found = False)."
      ]
    },
    quiz: {
      question: {
        fi: "Milloin for-silmukkaan liitetty else-lohko suoritetaan?",
        en: "When does the else block attached to a for loop execute?",
        ar: "متى يتم تنفيذ كتلة else الملحقة بحلقة for؟"
      },
      options: [
        { id: "a", text: { fi: "Aina silmukan joka kierroksen lopussa", en: "At the end of every single iteration", ar: "في نهاية كل دورة من دورات الحلقة" } },
        { id: "b", text: { fi: "Vain jos silmukassa suoritettiin break", en: "Only if a break occurred inside the loop", ar: "فقط في حال حدوث أمر break داخل الحلقة" } },
        { id: "c", text: { fi: "Vain jos silmukka käytiin loppuun ilman break-komentoa", en: "Only if the loop terminates normally without hitting break", ar: "فقط عندما تكتمل الحلقة طبيعياً دون مصادفة أي تعليمة break" } },
        { id: "d", text: { fi: "Vain jos silmukan läpikäytävä lista oli tyhjä", en: "Only when the iterable sequence was null or empty", ar: "فقط إذا كانت المتتالية فارغة تماماً" } }
      ],
      correctId: "c",
      explanation: {
        fi: "Pythonissa loop-else ajetaan vain silloin, kun silmukka iteroi kaikki alkiot eikä sitä keskeytetty break-lauseella.",
        en: "Python's loop-else runs exclusively when the loop finishes its complete iteration cycle without being broken by a break.",
        ar: "تنفذ بايثون كتلة loop-else فقط وحصرياً إذا انتهت جميع دورات الحلقة دون أن يقاطعها أمر break."
      }
    }
  },
  {
    id: 7,
    slug: "file-operations",
    icon: "FileText",
    level: "intermediate",
    estimatedMinutes: 25,
    title: {
      fi: "Tiedostokäsittely",
      en: "File Operations",
      ar: "عمليات الملفات وتدفق البيانات"
    },
    summary: {
      fi: "Tekstitiedostojen lukeminen ja kirjoittaminen, with-kontekstinhallinta ja binäärivirtojen käsittely.",
      en: "Reading and writing text files, the with context manager, and handling binary stream bytes.",
      ar: "قراءة وكتابة الملفات النصية، مدير السياق with، والتعامل مع تدفق البيانات الثنائية (Binary)."
    },
    theory: {
      fi: `
### Tiedostojen avaaminen ja tilat (Modes)
Pythonin sisäänrakennettu \`open(polku, tila, encoding)\` avaa tiedostokahvan.
* **'r' (Read):** Lukutila (oletus). Aiheuttaa \`FileNotFoundErrorin\`, jos tiedostoa ei ole.
* **'w' (Write):** Kirjoitustila. Luo tiedoston tai **ylikirjoittaa** olemassa olevan tiedoston kokonaan!
* **'a' (Append):** Lisäystila. Kirjoittaa uuden tiedon olemassa olevan tiedoston loppuun.
* **'b' (Binary):** Binääritila (esim. \`'rb'\` tai \`'wb'\`). Käsitellään raakabyttejä (\`bytes\`) merkkijonojen sijaan.

### with-kontekstinhallinta (Context Manager)
Perinteinen \`f.close()\` on altis virheille: jos luvussa tapahtuu poikkeus, tiedosto voi jäädä auki ja lukita resursseja.
Pythonin suositeltu ja ammattimainen tapa on **with-lause**:
\`\`\`python
with open("data.txt", "r", encoding="utf-8") as f:
    sisalto = f.read()
\`\`\`
\`with\`-lohko takaa, että tiedostokahva suljetaan **aina ja automaattisesti**, vaikka lohkon sisällä tapahtuisi poikkeus!

### Binääritiedostojen käsittely ('rb', 'wb')
Kun käsitellään kuvia, PDF-tiedostoja tai ääniä, tiedostot avataan binääritilassa. Tiedostojen alusta voidaan lukea esimerkiksi maagiset tavut (magic numbers, esim. PNG: \`\\x89PNG\\r\\n\\x1a\\n\`), joilla tunnistetaan tiedostotyyppi riippumatta tiedostopäätteestä.
      `,
      en: `
### File Access Modes in Python
Files are accessed using the built-in \`open(filepath, mode, encoding)\`:
* **'r' (Read):** Default mode. Opens for reading; raises \`FileNotFoundError\` if absent.
* **'w' (Write):** Opens for writing; truncates and overwrites existing contents or creates a new file.
* **'a' (Append):** Appends newly written data to the end of the file.
* **'b' (Binary):** Binary mode (e.g. \`'rb'\`, \`'wb'\`); handles raw \`bytes\` objects instead of decoded text.

### The with Context Manager
Relying on manual \`f.close()\` is hazardous because exceptions prior to closing leak system file descriptors.
Python provides the **context manager pattern (\`with\` statement)**:
\`\`\`python
with open("report.txt", "w", encoding="utf-8") as f:
    f.write("Clean data\\n")
\`\`\`
The context manager guarantees file closure immediately when exiting the block, even during uncaught exceptions.

### Binary Streams & Magic Numbers
Binary files (\`'rb'\`) read raw bytes. By reading initial bytes, applications can inspect file signatures (e.g., PNG files start with byte signature \`b'\\x89PNG'\`).
      `,
      ar: `
### أوضاع فتح الملفات في بايثون
يتم التعامل مع الملفات عبر الدالة المدمجة \`open(file, mode, encoding)\`:
* **'r' (قراءة):** الوضع الافتراضي؛ يطلق خطأ إذا كان الملف غير موجود.
* **'w' (كتابة):** إنشاء ملف جديد أو **استبدال ومسح** محتوى الملف السابق تماماً!
* **'a' (إلحاق):** إضافة بيانات جديدة في نهاية الملف دون مسح محتواه.
* **'b' (ثنائي):** التعامل مع البايتات الخام (مثل الصور والملفات الصوتية).

### مدير السياق with (Context Manager)
إن إغلاق الملف يدوياً بـ \`f.close()\` قد يفشل إذا حدث خطأ أثناء القراءة.
الحل الاحترافي هو استخدام جملة **\`with\`**:
\`\`\`python
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
\`\`\`
تضمن جملة \`with\` إغلاق الملف وتحرير موارد النظام تلقائياً دائماً وأبداً.

### معالجة الملفات الثنائية
في وضع \`'rb'\`، نقرأ بايتات خام (\`bytes\`) لفحص تواقيع الملفات الرقمية (Magic Numbers).
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 7: Professional File Handling

# 1. Tekstitiedoston luominen ja kirjoittaminen with-rakenteella
lokitiedosto = "palvelin_loki.txt"
rivit = [
    "2026-10-17 12:00:01 [INFO] Palvelin käynnistetty",
    "2026-10-17 12:05:22 [WARNING] Korkea muistinkäyttö",
    "2026-10-17 12:10:45 [ERROR] Tietokantayhteys katkesi"
]

with open(lokitiedosto, "w", encoding="utf-8") as f:
    for rivi in rivit:
        f.write(rivi + "\\n")
print(f"Kirjoitettu {len(rivit)} riviä tiedostoon: {lokitiedosto}")

# 2. Tiedoston lukeminen rivi riviltä muistitehokkaasti
with open(lokitiedosto, "r", encoding="utf-8") as f:
    for rivinumero, rivi in enumerate(f, start=1):
        if "[ERROR]" in rivi:
            print(f"Hälytys rivillä {rivinumero}: {rivi.strip()}")

# 3. Binääritiedoston simulointi (PNG maaginen tavuallekiroitus)
png_header = bytes([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])
print("Binääritavut (Hex):", png_header.hex())
print("Onko aito PNG-allekirjoitus?", png_header.startswith(b"\\x89PNG"))`,
    proTips: {
      fi: [
        "Määritä tekstitiedostoja avatessa aina eksplisiittisesti encoding='utf-8', jotta koodi toimii luotettavasti Windows-, macOS- ja Linux-järjestelmissä.",
        "Älä lue suuria gigatavujen tiedostoja muistiin kerralla f.read()-metodilla. Käytä for line in f: -iteraattoria, joka lukee yhden rivin kerrallaan.",
        "Käytä pathlib.Path -kirjastoa tiedostopolkujen käsittelyyn merkkijonojen sijasta."
      ],
      en: [
        "Always explicitly declare \`encoding='utf-8'\` when opening text files to prevent cross-platform encoding bugs.",
        "Never use \`f.read()\` on multi-gigabyte files; iterate line-by-line using \`for line in f:\` for O(1) memory consumption.",
        "Adopt \`pathlib.Path\` modern object-oriented file paths instead of string concatenation."
      ],
      ar: [
        "حدد دائماً \`encoding='utf-8'\` عند فتح الملفات النصية لضمان عملها بالتوافق التام عبر كل المنصات.",
        "لا تستخدم `f.read()` لقراءة ملفات ضخمة بحجم غيغابايت دفعة واحدة؛ بل اقرأ سطراً بسطر باستخدام `for line in f:`.",
        "استخدم مكتبة `pathlib.Path` الحديثة لإدارة المسارات البرمجية باحترافية."
      ]
    },
    quiz: {
      question: {
        fi: "Miksi with open(...) as f: -rakenne on suositeltu tapa tiedostojen avaamiseen?",
        en: "Why is the with open(...) as f: syntax the recommended pattern for file I/O?",
        ar: "لماذا تعد صياغة with open(...) as f: الطريقة القياسية الموصى بها لإدارة الملفات؟"
      },
      options: [
        { id: "a", text: { fi: "Se tekee tiedoston lukemisesta kaksi kertaa nopeampaa", en: "It doubles raw filesystem read throughput", ar: "تضاعف سرعة القراءة مرتين" } },
        { id: "b", text: { fi: "Se takaa automaattisen tiedoston sulkemisen myös poikkeustilanteissa", en: "It guarantees file closure automatically even if exceptions occur", ar: "تضمن إغلاق الملف تلقائياً حتى عند حدوث أخطاء واستثناءات" } },
        { id: "c", text: { fi: "Se estää tiedostoa koskaan tulemasta poistetuksi", en: "It locks files permanently against deletion", ar: "تمنع حذف الملف نهائياً من القرص" } },
        { id: "d", text: { fi: "Se kääntää tekstitiedoston automaattisesti JSON-muotoon", en: "It automatically translates content to JSON format", ar: "تحول الملف تلقائياً إلى صيغة JSON" } }
      ],
      correctId: "b",
      explanation: {
        fi: "with-kontekstinhallinta kutsuu automaattisesti tiedoston __exit__-metodia, joka sulkee tiedostokahvan kaikissa tilanteissa.",
        en: "The context manager's __exit__ hook automatically closes file descriptors cleanly upon leaving the block.",
        ar: "تستدعي جملة with دالة الخروج __exit__ تلقائياً لإغلاق الملف فور انتهاء الكتلة البرمجية."
      }
    }
  },
  {
    id: 8,
    slug: "functions-and-scope",
    icon: "Code2",
    level: "intermediate",
    estimatedMinutes: 30,
    title: {
      fi: "Funktiot ja näkyvyysalue",
      en: "Functions & Scope",
      ar: "الدوال ونطاق المتغيرات"
    },
    summary: {
      fi: "def-avainsana, oletusargumentit, paluuarvot, *args ja **kwargs sekä LEGB-näkyvyyssääntö.",
      en: "The def statement, default parameters, return mechanics, *args, **kwargs, and the LEGB scope rule.",
      ar: "إنشاء الدوال بـ def، المعاملات الافتراضية، قيم الإرجاع، *args و **kwargs، وقاعدة نطاق LEGB."
    },
    theory: {
      fi: `
### Funktioiden määrittely: def
Funktiot ovat uudelleenkäytettäviä koodilohkoja. Funktio määritellään \`def\`-avainsanalla, jota seuraa funktion nimi, parametrilista sulkeissa ja kaksoispiste.
* **Docstringit:** Funktion heti ensimmäiselle riville kirjoitetaan kolminkertaisilla lainausmerkeillä dokumentaatiomerkkijono (\`"""Selitys..."""\`), jonka \`help()\`-funktio osaa lukea.

### Parametrit ja oletusargumentit
Funktioille voidaan antaa oletusarvoja:
\`\`\`python
def tervehdi(nimi, viesti="Tervetuloa"):
    return f"{viesti}, {nimi}!"
\`\`\`
**Kriittinen sääntö:** Parametrit, joilla on oletusarvo, on aina sijoitettava pakollisten parametrien **jälkeen**. Älä koskaan käytä muuttuvia olioita (kuten tyhjää listaa \`[]\`) oletusarvona!

### *args ja **kwargs
* **\*args:** Kerää ylimääräiset sijaintiargumentit monikoksi (tuple).
* **\*\*kwargs:** Kerää ylimääräiset nimetyt avainsana-argumentit sanakirjaksi (dictionary).

### Muuttujien näkyvyysalue: LEGB-sääntö
Kun koodissa viitataan muuttujan nimeen, Python etsii sitä seuraavassa järjestyksessä:
1. **L (Local):** Funktion paikallinen näkyvyysalue.
2. **E (Enclosing):** Sisäkkäisen funktion ympäröivä ulompi funktio (sulkeuma / closure).
3. **G (Global):** Moduulin/tiedoston päätason globaali näkyvyysalue.
4. **B (Built-in):** Pythonin sisäänrakennetut funktiot ja nimet (\`len\`, \`print\`, \`range\`, jne.).
Muuttujan arvon muuttamiseen globaalilla tasolla tarvitaan \`global\`-avainsana, ja sulkeumissa \`nonlocal\`.
      `,
      en: `
### Function Definition: The def Keyword
Functions encapsulate modular, reusable logic.
* **Docstrings:** High-quality Python functions start with a multi-line docstring (\`"""Description."""\`) for automated documentation via \`help()\`.

### Arguments & Default Parameters
Parameters can specify default fallback values:
\`\`\`python
def connect(host, port=8080, timeout=10):
    return f"Connecting to {host}:{port}"
\`\`\`
**Crucial Warning:** Never use mutable defaults (e.g., \`def fn(items=[]):\`). Because default arguments are evaluated once at module load time, the identical list will be shared across all invocations! Use \`None\` as default instead.

### Variadic Arguments: *args and **kwargs
* **\*args:** Collects arbitrary positional arguments into a \`tuple\`.
* **\*\*kwargs:** Collects arbitrary keyword arguments into a \`dict\`.

### Scope Resolution: The LEGB Rule
Python searches for variable bindings hierarchically:
1. **Local (L):** Inside current function execution frame.
2. **Enclosing (E):** In any enclosing outer functions (closures).
3. **Global (G):** Top-level module variables.
4. **Built-in (B):** Preloaded Python primitives (\`range\`, \`len\`, \`str\`).
Modifying enclosing scope variables requires \`nonlocal\`; modifying global scope requires \`global\`.
      `,
      ar: `
### تعريف الدوال بكلمة def
الدوال هي وحدات برمجية قابلة لإعادة الاستخدام.
* **نصوص التوثيق (Docstrings):** توثيق عمل الدالة في السطر الأول باستخدام \`"""توثيق..."""\`.

### المعاملات والقيم الافتراضية
يمكن تحديد قيم افتراضية للمدخلات:
\`\`\`python
def send_email(to, subject="إشعار", retries=3):
    ...
\`\`\`
**تحذير بالغ الأهمية:** إياك واستخدام قيم افتراضية قابلة للتعديل مثل القوائم الفارغة \`def fn(data=[]):\` لأن بايثون ستشارك القائمة ذاتها بين كل الاستدعاءات! استخدم \`None\` كقيمة افتراضية بدلاً منها.

### المعاملات المرنة: *args و **kwargs
* **\*args:** جمع المعاملات الموضعية في هيئة Tuple.
* **\*\*kwargs:** جمع المعاملات المسماة في هيئة Dictionary.

### قاعدة نطاق المتغيرات (LEGB Rule)
تبحث بايثون عن أسماء المتغيرات وفق هذا الترتيب الهرمي:
1. **Local (L):** النطاق المحلي داخل الدالة الحالية.
2. **Enclosing (E):** الدوال الحاضنة الخارجية (في حال الدوال المتداخلة).
3. **Global (G):** النطاق العام للملف.
4. **Built-in (B):** الدوال والكلمات المحجوزة المدمجة في بايثون مثل \`len\` و \`print\`.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 8: Functions, *args, **kwargs & LEGB

# 1. Funktio oletusarvoilla ja tyyppivihjeillä (Type Hints)
def laske_palkka(tunnit: float, tuntipalkka: float = 24.50, bonus: float = 0.0) -> float:
    """Laskee työntekijän kokonaispalkan lisineen."""
    brutto = (tunnit * tuntipalkka) + bonus
    return round(brutto, 2)

palkka = laske_palkka(37.5, bonus=150.0)
print(f"Laskettu palkka: {palkka}€")

# 2. *args ja **kwargs joustaviin parametreihin
def monitoimi_logger(taso: str, *viestit, **metatiedot):
    yhdistetty_viesti = " ".join(str(v) for v in viestit)
    print(f"[{taso.upper()}] {yhdistetty_viesti}")
    if metatiedot:
        print(f"  Metatiedot: {metatiedot}")

monitoimi_logger("warning", "Palvelin", "ylikuormittunut", cpu=94, ip="192.168.1.10")

# 3. LEGB ja sulkeuma (Closure)
def luo_laskuri(alkuarvo: int = 0):
    arvo = alkuarvo # Enclosing scope
    def kasvata(maara: int = 1):
        nonlocal arvo # Viittaa ulomman funktion muuttujaan
        arvo += maara
        return arvo
    return kasvata

laskuri = luo_laskuri(10)
print("Laskuri:", laskuri(), laskuri(5))`,
    proTips: {
      fi: [
        "Käytä aina tyyppivihjeitä (Type Hints, esim. def summa(a: int, b: int) -> int:) paremman luettavuuden ja IDE-tuen saavuttamiseksi.",
        "Älä koskaan käytä muuttuvaa oletusargumenttia (kuten def f(x=[]):). Käytä aina: def f(x=None): if x is None: x = []",
        "Pidä funktiot pieninä ja noudata Single Responsibility Principle (SRP) -periaatetta: yksi funktio tekee yhden asian hyvin."
      ],
      en: [
        "Incorporate Type Hints (\`def fn(a: int) -> str:\`) for self-documenting code and static analysis verification.",
        "Never use mutable default arguments like \`def fn(arg=[]):\`. Use the sentinel pattern: \`def fn(arg=None): if arg is None: arg = []\`.",
        "Adhere to the Single Responsibility Principle: each function should perform exactly one clear logical task."
      ],
      ar: [
        "استخدم تلميحات الأنواع (Type Hints) لتحسين التوثيق وتسهيل اكتشاف الأخطاء في بيئات التطوير.",
        "تجنب القوائم كمعاملات افتراضية؛ استخدم دائماً نمط الحارس: def fn(items=None): if items is None: items = [].",
        "اجعل كل دالة مسؤولة عن مهمة محددة واحدة فقط وفق مبدأ المسؤولية الفردية (SRP)."
      ]
    },
    quiz: {
      question: {
        fi: "Mikä on tulos, jos funktiota def lisaa(x, lista=[]): lista.append(x); return lista kutsutaan kahdesti: lisaa(1) ja lisaa(2)?",
        en: "What happens if def append_item(x, items=[]): items.append(x); return items is invoked twice: append_item(1) then append_item(2)?",
        ar: "ماذا يحدث عند استدعاء الدالة def add(x, lst=[]): lst.append(x); return lst مرتين متتاليتين: add(1) ثم add(2)؟"
      },
      options: [
        { id: "a", text: { fi: "Molemmat palauttavat [1] ja [2] erillisinä listoina", en: "Returns [1] then [2] as isolated lists", ar: "ترجع [1] ثم [2] كقوائم مستقلة" } },
        { id: "b", text: { fi: "Toinen kutsu palauttaa [1, 2], koska oletuslista jaetaan kutsujen välillä", en: "The second call returns [1, 2] because the default list is shared across calls", ar: "الاستدعاء الثاني يرجع [1, 2] لأن القائمة الافتراضية مشتركة بين الاستدعاءات" } },
        { id: "c", text: { fi: "Python heittää SyntaxErrorin", en: "Python throws a SyntaxError", ar: "تطلق بايثون خطأ SyntaxError" } },
        { id: "d", text: { fi: "Toinen kutsu ylikirjoittaa ensimmäisen ja palauttaa [2]", en: "The second call overwrites the first and returns [2]", ar: "الاستدعاء الثاني يمسح الأول ويرجع [2]" } }
      ],
      correctId: "b",
      explanation: {
        fi: "Oletusargumentit luodaan Pythonissa vain kerran funktion määrittelyhetkellä, joten muuttuva lista jaetaan kaikkien kutsujen kesken.",
        en: "Default parameters are evaluated once upon function definition, meaning all invocations share the identical mutable list instance.",
        ar: "تُنشأ المعاملات الافتراضية مرة واحدة فقط عند تعريف الدالة، مما يجعل القائمة المشتركة تتراكم فيها القيم."
      }
    }
  },
  {
    id: 9,
    slug: "modules-and-packages",
    icon: "Package",
    level: "intermediate",
    estimatedMinutes: 25,
    title: {
      fi: "Moduulit ja paketit",
      en: "Modules & Packages",
      ar: "الوحدات والحزم البرمجية"
    },
    summary: {
      fi: "Sisäänrakennetut moduulit, import-syntaksit, omien moduulien luominen ja __name__ == '__main__' suojaus.",
      en: "Standard library modules, import syntaxes, structuring custom modules, and the __name__ guard.",
      ar: "المكتبات القياسية، صيغ الاستيراد المختلفة، إنشاء وحدات مخصصة، وشرط __name__ الحارس."
    },
    theory: {
      fi: `
### Mitä ovat moduulit ja paketit?
* **Moduuli (Module):** Yksittäinen Python-tiedosto (.py), joka sisältää funktioita, luokkia ja muuttujia.
* **Paketti (Package):** Hakemisto, joka sisältää useita moduuleja sekä \`__init__.py\`-tiedoston (Python 3.3+ tukee myös namespace-paketteja ilman tätä).
* **Paristot mukana (Batteries Included):** Python sisältää valtavan sisäänrakennetun standardikirjaston: \`math\`, \`random\`, \`datetime\`, \`json\`, \`os\`, \`sys\`, \`pathlib\`, \`re\`.

### Import-syntaksin eri muodot
1. \`import math\`: Tuo koko moduulin (kutsutaan \`math.sqrt(16)\`).
2. \`from math import sqrt, pi\`: Tuo tietyt funktiot suoraan paikalliseen nimiavaruuteen (\`sqrt(16)\`).
3. \`import numpy as np\`: Tuo moduulin lyhennetyllä aliaksella.
* *Varoitus:* Vältä \`from moduuli import *\` -syntaksia, sillä se saastuttaa nimiavaruuden ja voi ylikirjoittaa omia funktioita huomaamatta.

### Tiedoston suoritus: if __name__ == '__main__':
Kun Python-tiedosto ajetaan suoraan terminaalista, Python asettaa sen sisäisen muuttujan arvoksi \`__name__ = '__main__'\`.
Jos tiedosto sen sijaan tuodaan toiseen tiedostoon \`import\`-komennolla, \`__name__\` saa arvokseen moduulin nimen.
Suojaamalla testikoodi tällä ehdolla varmistetaan, että koodi ei suoriudu vahingossa, kun moduuli vain importataan!
      `,
      en: `
### Modules vs. Packages
* **Module:** A single Python file (\`.py\`) encapsulating classes, functions, and runnable code.
* **Package:** A directory containing a cluster of modules, conventionally identified by an \`__init__.py\` file.
* **"Batteries Included":** Python ships with an extensive standard library: \`math\`, \`datetime\`, \`json\`, \`random\`, \`os\`, \`pathlib\`, and \`re\`.

### Import Patterns & Best Practices
1. \`import math\`: Namespaced import (\`math.sqrt(25)\`).
2. \`from math import sqrt, pi\`: Selective imports into the current namespace.
3. \`import pandas as pd\`: Alias import for conciseness.
* *Anti-pattern:* Never use wildcard imports (\`from module import *\`) because they pollute the namespace and obscure symbol origins.

### The Standard Entry Guard: if __name__ == '__main__':
When a script is run directly from the terminal, Python sets \`__name__ = '__main__'\`.
When imported as a module, \`__name__\` equals the module filename.
Wrapping executable code inside this check ensures your code can serve both as a standalone script and as an importable library without unwanted side effects.
      `,
      ar: `
### الفرق بين الوحدات (Modules) والحزم (Packages)
* **الوحدة (Module):** ملف بايثون فردي بصيغة (\`.py\`) يحتوي دوال ومتغيرات.
* **الحزمة (Package):** مجلد يحتوي عدة وحدات مع ملف \`__init__.py\` لتعريفه كحزمة متكاملة.
* **فلسفة "Batteries Included":** تمتلك بايثون مكتبة قياسية غنية تشمل \`math\` و \`json\` و \`datetime\` و \`random\`.

### أشكال جمل الاستيراد (Import)
1. \`import math\`: استيراد كامل للوحدة واستدعاؤها بـ \`math.pi\`.
2. \`from math import sqrt\`: استيراد دالة محددة مباشرة.
3. \`import numpy as np\`: استيراد مع اسم مستعار مختصر.
* *تحذير:* تجنب استخدام \`from module import *\` لأنها تخلط الأسماء وتؤدي لتضارب غير مرئي في الكود.

### شرط التشغيل الرئيسي: if __name__ == '__main__':
عند تشغيل الملف مباشرة بواسطة بايثون تصبح قيمة المتغير الداخلي \`__name__ = '__main__'\`.
أما عند استيراد الملف كوحدة في كود آخر، تصبح قيمته اسم الملف ذاته.
يحمي هذا الشرط كود الاختبار من التنفيذ التلقائي عند مجرد استيراد الملف.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 9: Standard Modules & Custom Architecture
import math
import random
from datetime import datetime, date

# 1. Standardikirjaston käyttöä
print("Pii:", round(math.pi, 4))
print("Neliöjuuri:", math.sqrt(144))

satunnainen_noppa = random.randint(1, 6)
print(f"Heitettiin noppaa: {satunnainen_noppa}")

tanaan = datetime.now()
print(f"Aikaleima: {tanaan.strftime('%Y-%m-%d %H:%M:%S')}")

# 2. Moduulin suojattu rakenne
def muunna_lampotila(celsius: float) -> float:
    """Muuntaa Celsius-asteet Fahrenheit-asteiksi."""
    return (celsius * 9/5) + 32

if __name__ == "__main__":
    # Tämä lohko suoritetaan VAIN jos tiedosto ajetaan suoraan!
    print("Moduulin oma sisäinen testiajo:")
    testi_c = 25.0
    print(f"{testi_c}°C = {muunna_lampotila(testi_c)}°F")`,
    proTips: {
      fi: [
        "Järjestä import-lauseet PEP 8 -suosituksen mukaisesti: 1) Standardikirjastot, 2) Kolmannen osapuolen paketit, 3) Oman projektin moduulit.",
        "Voit tutkia minkä tahansa moduulin sisältämiä funktioita ja attribuutteja dir()-funktiolla (esim. dir(math)).",
        "Käytä requirements.txt-tiedostoa tai pyproject.toml-tiedostoa ulkoisten pakettien versiohallintaan."
      ],
      en: [
        "Group import statements according to PEP 8: 1) Standard library, 2) Third-party packages, 3) Local application imports.",
        "Inspect available methods and constants of any module dynamically with \`dir(module_name)\`.",
        "Lock third-party module versions strictly using \`pip freeze > requirements.txt\` or \`pyproject.toml\`."
      ],
      ar: [
        "نظم جمل الاستيراد وفق معيار PEP 8: 1) المكتبات القياسية، 2) حزم الطرف الثالث، 3) ملفات مشروعك الخاصة.",
        "استكشف محتويات أي وحدة برمجية بسهولة باستخدام الدالة الفاحصة \`dir(module)\`.",
        "ثبت إصدارات الحزم الخارجية بدقة في ملف \`requirements.txt\` لتجنب تضارب التحديثات."
      ]
    },
    quiz: {
      question: {
        fi: "Mitä tapahtuu if __name__ == '__main__': -ehdon alla olevalle koodille, kun kyseinen tiedosto tuodaan import-lauseella toiseen tiedostoon?",
        en: "What happens to the code nested under if __name__ == '__main__': when that file is imported by another script?",
        ar: "ماذا يحدث للكود الموجود داخل شرط if __name__ == '__main__': عند استيراد الملف كوحدة في ملف آخر؟"
      },
      options: [
        { id: "a", text: { fi: "Se suoritetaan välittömästi importin yhteydessä", en: "It executes automatically at import time", ar: "يتم تنفيذه تلقائياً وفورياً وقت الاستيراد" } },
        { id: "b", text: { fi: "Se ohitetaan kokonaan, eikä sitä suoriteta", en: "It is bypassed completely and not executed", ar: "يتم تخطيه تماماً ولا يتم تنفيذه إطلاقاً" } },
        { id: "c", text: { fi: "Python antaa ImportError-virheen", en: "Python raises an ImportError", ar: "تطلق بايثون خطأ استيراد ImportError" } },
        { id: "d", text: { fi: "Koodi poistetaan tiedostosta automaattisesti", en: "The code is permanently stripped from memory", ar: "يتم حذف الكود نهائياً من الذاكرة" } }
      ],
      correctId: "b",
      explanation: {
        fi: "Tuodussa tiedostossa __name__ saa arvokseen moduulin nimen (eikä '__main__'), joten kyseinen lohko ohitetaan turvallisesti.",
        en: "When imported, \`__name__\` is assigned the module's actual name rather than '__main__', effectively skipping execution of the block.",
        ar: "عند الاستيراد، يحمل المتغير \`__name__\` اسم الملف الحقيقي بدلاً من '__main__'، وبالتالي يتم تجاوز الكود بأمان."
      }
    }
  },
  {
    id: 10,
    slug: "error-and-exception-handling",
    icon: "AlertTriangle",
    level: "intermediate",
    estimatedMinutes: 30,
    title: {
      fi: "Virheiden ja poikkeusten käsittely",
      en: "Error & Exception Handling",
      ar: "معالجة الأخطاء والاستثناءات"
    },
    summary: {
      fi: "try-except-else-finally elinkaari, useiden poikkeusten sieppaus ja IndexErrorin välttäminen.",
      en: "The try-except-else-finally lifecycle, catching multiple exceptions, and guarding against IndexError.",
      ar: "دورة حياة try-except-else-finally، التقاط الاستثناءات المتعددة وتفادي خطأ IndexError."
    },
    theory: {
      fi: `
### Syntaksivirheet vs Poikkeukset (Exceptions)
* **Syntaksivirheet (SyntaxError):** Koodin kielioppivirheitä, jotka estävät ohjelman kääntämisen ja käynnistymisen kokonaan (esim. puuttuva kaksoispiste).
* **Poikkeukset (Runtime Exceptions):** Koodi on syntaktisesti oikein, mutta suorituksen aikana tapahtuu odottamaton tilanne (esim. nollalla jako \`ZeroDivisionError\` tai olemattomaan listan indeksiin viittaaminen \`IndexError\`).

### Täydellinen try-except-else-finally -arkkitehtuuri
1. **try:** Suorittaa koodin, jossa poikkeus saattaa tapahtua.
2. **except VirheTyyppi as e:** Sieppaa määritellyn virheen ja suorittaa toipumiskoodin.
3. **else:** Suoritetaan **vain jos mitään poikkeusta EI tapahtunut** try-lohkossa!
4. **finally:** Suoritetaan **aina**, riippumatta siitä tuliko virhe vai ei (ihanteellinen resurssien siivoamiseen).

### IndexErrorin välttäminen ammattimaisesti
Yleinen aloittelijan virhe on yrittää viitata listan indeksiin, jota ei ole olemassa (\`IndexError: list index out of range\`).
Sen sijaan, että turvaudutaan vain virheen sieppaamiseen, suositellaan **ennakoivaa tarkistusta (EAFP vs LBYL)**:
* Tarkistetaan listan pituus ennen indeksointia: \`if 0 <= indeksi < len(lista):\`
* Sanakirjoissa käytetään \`.get(avain, oletus)\`-metodia \`KeyErrorin\` välttämiseksi.
      `,
      en: `
### Syntax Errors vs. Runtime Exceptions
* **SyntaxError:** Grammatical invalidities detected at parse time before code executes.
* **Exceptions:** Logical faults encountered during active execution (e.g., \`ZeroDivisionError\`, \`IndexError\`, \`ValueError\`).

### The Robust try-except-else-finally Lifecycle
1. **try:** Encloses hazardous operations that might raise an exception.
2. **except SpecificError as err:** Catches and isolates designated exceptions.
3. **else:** Executes **strictly if no exception was raised** in the \`try\` block.
4. **finally:** Guaranteed execution in all scenarios (perfect for closing sockets, database connections, and locks).

### Preventing IndexError Elegantly
Attempting to read non-existent list indices triggers \`IndexError: list index out of range\`.
Senior engineering paradigms:
* Guard index bounds conditionally: \`if 0 <= idx < len(items):\`
* For dictionaries, use \`.get(key, default)\` to completely eliminate \`KeyError\` exceptions.
* Leverage Python's EAFP (*Easier to Ask for Forgiveness than Permission*) idiom responsibly.
      `,
      ar: `
### الأخطاء النحوية مقابل الاستثناءات البرمجية
* **خطأ نحوي (SyntaxError):** خلل في قواعد لغة بايثون يمنع تشغيل البرنامج أصلاً.
* **استثناء وقت التشغيل (Exception):** كود سليم نحوياً لكنه يواجه حدثاً غير متوقع مثل القسمة على صفر (\`ZeroDivisionError\`) أو الوصول لعنصر غير موجود في القائمة (\`IndexError\`).

### هيكل try-except-else-finally المتكامل
1. **try:** وضع الكود المعرض للخطأ بداخله.
2. **except SpecificError as e:** التقاط نوع الخطأ والتعامل معه بمرونة.
3. **else:** يتم تنفيذها **فقط في حال عدم حدوث أي خطأ إطلاقاً** داخل try.
4. **finally:** يتم تنفيذها **دائماً وأبداً** سواء حدث خطأ أم لم يحدث (مثالية لإغلاق الاتصالات بالخوادم والملفات).

### تجنب خطأ IndexError باحترافية
يحدث خطأ \`IndexError\` عند محاولة قراءة فهرس يتجاوز حجم القائمة.
* التحقق من الحدود أولاً: \`if 0 <= index < len(lst):\`.
* استخدام دالة \`.get()\` مع القواميس لمنع حدوث \`KeyError\`.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 10: Robust Error & Exception Handling

def jaa_luvut(osoittaja_str: str, nimittaja_str: str):
    """Turvallinen jakolaskutoimitus poikkeustenkäsittelyllä."""
    try:
        a = float(osoittaja_str)
        b = float(nimittaja_str)
        tulos = a / b
    except ValueError as e:
        print(f"[VIRHE] Syöte ei ole kelvollinen luku: {e}")
        return None
    except ZeroDivisionError:
        print("[VIRHE] Nollalla jakaminen on matemaattisesti mahdotonta!")
        return None
    else:
        # Ajetaan VAIN jos try onnistui täydellisesti!
        print(f"[ONNISTUI] Jakolaskun tulos: {tulos}")
        return tulos
    finally:
        # Ajetaan AINA!
        print("[LOKI] Jakolaskutoimituksen käsittely päättyi.\\n")

# Testataan eri tilanteita
jaa_luvut("100", "4")    # Onnistuu
jaa_luvut("50", "0")     # ZeroDivisionError
jaa_luvut("sata", "5")   # ValueError

# 2. IndexErrorin välttäminen ehdolla
hedelmat = ["omena", "banaani"]
valittu_indeksi = 4

if 0 <= valittu_indeksi < len(hedelmat):
    print("Valittu:", hedelmat[valittu_indeksi])
else:
    print(f"Indeksi {valittu_indeksi} ylittää listan koon (max {len(hedelmat)-1})")`,
    proTips: {
      fi: [
        "Älä koskaan käytä paljasta except: -lausetta ilman virhetyyppiä, sillä se sieppaa myös ohjelman sulkukomennot (KeyboardInterrupt, SystemExit).",
        "Käytä else-lohkoa toiminnoille, joiden tulee suoriutua vain onnistuneen try-kokeilun jälkeen.",
        "Voit heittää omia poikkeuksia selkeällä virheilmoituksella: raise ValueError('Luvun on oltava positiivinen')."
      ],
      en: [
        "Never write a bare \`except:\` clause; it intercepts critical OS signals such as \`KeyboardInterrupt\` and \`SystemExit\`.",
        "Put code that must only run when \`try\` succeeded inside the \`else:\` block to keep the \`try\` block minimal.",
        "Raise custom informative errors using \`raise ValueError('Detailed context here')\`."
      ],
      ar: [
        "إياك واستخدام عبارة \`except:\` مجردة دون تحديد نوع الخطأ؛ لأنها تلتقط حتى أوامر إيقاف البرنامج الفوري.",
        "ضع الكود الذي يتطلب نجاح المحاولة فقط داخل كتلة \`else:\` لتبسيط وفصل كود \`try\`.",
        "أطلق أخطاء مخصصة واضحة لبرنامجك باستخدام: \`raise ValueError('رسالة التوضيح')\`."
      ]
    },
    quiz: {
      question: {
        fi: "Mikä lohko suoritetaan try-rakenteessa vain silloin, kun yhtäkään poikkeusta EI tapahtunut?",
        en: "Which block in a try construct executes exclusively when NO exception occurred?",
        ar: "أي كتلة في بنية try يتم تنفيذها حصراً عند عدم حدوث أي استثناء إطلاقاً؟"
      },
      options: [
        { id: "a", text: { fi: "finally", en: "finally", ar: "finally" } },
        { id: "b", text: { fi: "else", en: "else", ar: "else" } },
        { id: "c", text: { fi: "except", en: "except", ar: "except" } },
        { id: "d", text: { fi: "pass", en: "pass", ar: "pass" } }
      ],
      correctId: "b",
      explanation: {
        fi: "try-rakenteen else-lohko suoritetaan nimenomaan silloin, kun try-lohko selvisi ilman poikkeuksia. finally ajetaan aina.",
        en: "The \`else\` clause executes strictly when the \`try\` body completed without encountering an exception.",
        ar: "كتلة \`else\` مخصصة للتنفيذ فقط عند اكتمال \`try\` بنجاح دون أي استثناء، بينما \`finally\` تنفذ في كل الأحوال."
      }
    }
  },
  {
    id: 11,
    slug: "data-structures",
    icon: "Layers",
    level: "advanced",
    estimatedMinutes: 35,
    title: {
      fi: "Tietorakenteet",
      en: "Data Structures",
      ar: "هياكل البيانات المتقدمة"
    },
    summary: {
      fi: "Listat, sanakirjat, monikot ja joukot: metodit, aikavaativuudet ja oikean tietorakenteen valinta.",
      en: "Lists, Dictionaries, Tuples, and Sets: methods, time complexity, and selection guidelines.",
      ar: "القوائم، القواميس، الصفوف، والمجموعات: الدوال، التعقيد الزمني واختيار البنية المناسبة."
    },
    theory: {
      fi: `
### Pythonin 4 keskeistä tietorakennetta
Pythonissa on 4 sisäänrakennettua tietorakennetta, joilla jokaisella on omat vahvuutensa:

| Tietorakenne | Järjestetty? | Muuttuva? (Mutable) | Duplikaatit? | Esimerkki |
| :--- | :--- | :--- | :--- | :--- |
| **List (Lista)** | Kyllä | Kyllä | Sallittu | \`[1, 2, 2, 3]\` |
| **Dictionary (Sanakirja)** | Kyllä (3.7+) | Kyllä | Uniikit avaimet | \`{"id": 1, "nimi": "Matti"}\` |
| **Tuple (Monikko)** | Kyllä | **Ei (Immutable)** | Sallittu | \`(10, 20)\` |
| **Set (Joukko)** | Ei | Kyllä | **Vain uniikit** | \`{1, 2, 3}\` |

### 1. Listat (Lists)
Dynaamisia taulukoita. Metodit: \`.append()\`, \`.extend()\`, \`.insert()\`, \`.pop()\`, \`.remove()\`, \`.sort()\`.
* **List comprehension:** Elegantti ja nopea tapa luoda uusi lista: \`[x**2 for x in range(10) if x % 2 == 0]\`.

### 2. Sanakirjat (Dictionaries)
Hajautustaulu (Hash Map) avain-arvo-pareille. Haku avaimella on huippunopea **O(1)**.
Metodit: \`.keys()\`, \`.values()\`, \`.items()\`, \`.get(key, default)\`, \`.update()\`.

### 3. Monikot (Tuples)
Kevyempiä ja muistitehokkaampia kuin listat. Koska monikot ovat muuttumattomia, niitä voidaan käyttää sanakirjan avaimina ja joukon alkioina.

### 4. Joukot (Sets)
Kokoelma uniikkeja arvoja. Tarjoaa matematiikasta tutut joukko-operaatiot:
* Yhdiste (Union): \`A | B\`
* Leikkaus (Intersection): \`A & B\`
* Erotus (Difference): \`A - B\`
      `,
      en: `
### The 4 Pillars of Python Collections

| Collection | Ordered | Mutable | Duplicates | Syntax Example |
| :--- | :--- | :--- | :--- | :--- |
| **List** | Yes | Yes | Allowed | \`['apple', 'banana', 'apple']\` |
| **Dictionary** | Yes (3.7+) | Yes | Unique Keys | \`{'id': 101, 'status': 'active'}\` |
| **Tuple** | Yes | **Immutable** | Allowed | \`(1920, 1080)\` |
| **Set** | No | Yes | **Unique Only** | \`{'python', 'react', 'git'}\` |

### Lists & Comprehensions
Dynamic arrays with amortization. Key methods: \`.append()\`, \`.pop()\`, \`.sort()\`.
Comprehension idiom: \`[n * 2 for n in data if n > 0]\`.

### Dictionaries (Hash Tables)
Constant time complexity **O(1)** key lookups.
Essential access method: \`dict.get(key, default)\` avoids catastrophic key exceptions.

### Tuples (Immutable Records)
Safe, memory-compact collections suitable for fixed coordinates, database rows, or dictionary keys.

### Sets (Mathematical Sets)
High-performance membership testing and deduplication:
* Union: \`A | B\`
* Intersection: \`A & B\`
* Difference: \`A - B\`
      `,
      ar: `
### هياكل البيانات الأربعة الأساسية في بايثون

| الهيكل | الترتيب | قابلية التعديل | تكرار العناصر | مثال |
| :--- | :--- | :--- | :--- | :--- |
| **List (القائمة)** | مرتبة | نعم | مسموح | \`[10, 20, 20]\` |
| **Dict (القاموس)** | مرتبة | نعم | مفاتيح فريدة | \`{'id': 1, 'name': 'علي'}\` |
| **Tuple (الصف)** | مرتبة | **غير قابلة للتعديل** | مسموح | \`(100, 200)\` |
| **Set (المجموعة)** | غير مرتبة | نعم | **قيم فريدة فقط** | \`{1, 2, 3}\` |

### القوائم وتوليدها (List Comprehension)
مصفوفات ديناميكية: \`.append()\` و \`.pop()\`. أسلوب التوليد: \`[x*2 for x in data]\`.

### القواميس (Dictionaries)
جداول تجزئة (Hash Tables) فائقة السرعة بزمن O(1). استخدم دائماً \`.get()\` للأمان.

### المجموعات (Sets) والعمليات الرياضية
* الاتحاد: \`A | B\`
* التقاطع: \`A & B\`
* الفرق: \`A - B\`
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 11: Modern Data Structures Lab

# 1. List Comprehension ja suodatus
luvut = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
neliot = [x**2 for x in luvut if x % 2 == 0]
print("Parillisten neliöt:", neliot)

# 2. Sanakirjan tehokäyttö ja get()
kayttaja = {"id": 101, "nimi": "Fahad", "rooli": "admin"}
print("Käyttäjänimi:", kayttaja.get("nimi"))
print("Puhelin (oletusarvolla):", kayttaja.get("puhelin", "Ei määritelty"))

# 3. Monikon purkaminen (Tuple Unpacking)
koordinaatit = (60.1699, 24.9384) # Helsinki lat, lon
lat, lon = koordinaatit
print(f"Helsingin sijainti: Leveysaste {lat}, Pituusaste {lon}")

# 4. Joukkojen (Sets) matematiikka ja duplikaattien poisto
kurssi_a = {"Python", "Git", "SQL", "Docker"}
kurssi_b = {"Python", "JavaScript", "HTML", "Docker"}

print("Molemmat kurssit jakavat (Leikkaus):", kurssi_a & kurssi_b)
print("Kaikki taidot yhteensä (Yhdiste):", kurssi_a | kurssi_b)
print("Vain kurssilla A (Erotus):", kurssi_a - kurssi_b)`,
    proTips: {
      fi: [
        "Jos sinun täytyy tarkistaa toistuvasti 'if alkio in kokoelma:', muunna lista joukoksi (set): haku on O(1) vakioaikainen listan O(N) sijaan!",
        "Käytä collections.defaultdict- ja collections.Counter -erikoistietorakenteita monimutkaisiin laskentoihin.",
        "Monikot (tuples) ovat muistitehokkaampia ja nopeampia luoda kuin listat."
      ],
      en: [
        "If you repeatedly execute \`if item in collection:\`, cast to a \`set\`: lookups are O(1) hash lookups instead of O(N) linear scans.",
        "Leverage \`collections.defaultdict\` and \`collections.Counter\` from the standard library for advanced counting tasks.",
        "Tuples require less memory and instantiate faster than lists; use them for fixed datasets."
      ],
      ar: [
        "إذا كنت تبحث كثيراً بـ `in` داخل مجموعة كبيرة، حولها إلى `set`؛ فالبحث فيها يستغرق زمناً ثابتاً O(1) مقارنة بـ O(N) للقوائم.",
        "استفد من هياكل `collections.Counter` الجاهزة لإحصاء تكرار العناصر باحترافية.",
        "الصفوف (Tuples) تستهلك مساحة أقل في الذاكرة وتُنشأ أسرع من القوائم؛ استخدمها للبيانات الثابتة."
      ]
    },
    quiz: {
      question: {
        fi: "Mikä seuraavista tietorakenteista poistaa automaattisesti kaikki kaksoiskappaleet (duplikaatit)?",
        en: "Which Python collection automatically discards and deduplicates duplicate items?",
        ar: "أي من هياكل البيانات التالية يقوم بحذف العناصر المكررة تلقائياً؟"
      },
      options: [
        { id: "a", text: { fi: "List", en: "List", ar: "List" } },
        { id: "b", text: { fi: "Tuple", en: "Tuple", ar: "Tuple" } },
        { id: "c", text: { fi: "Set (Joukko)", en: "Set", ar: "Set (المجموعة)" } },
        { id: "d", text: { fi: "Array", en: "Array", ar: "Array" } }
      ],
      correctId: "c",
      explanation: {
        fi: "Joukko (Set) sisältää määritelmänsä mukaan vain uniikkeja arvoja, joten duplikaatit karsiutuvat automaattisesti.",
        en: "Sets are defined strictly as collections of unique hashable elements, discarding duplicates automatically.",
        ar: "المجموعة (Set) مبنية رياضياً لتحتوي قيماً فريدة فقط، لذا تُسقط أي عنصر مكرر فوراً."
      }
    }
  },
  {
    id: 12,
    slug: "object-oriented-programming",
    icon: "Boxes",
    level: "advanced",
    estimatedMinutes: 40,
    title: {
      fi: "Olio-ohjelmointi (OOP)",
      en: "Object-Oriented Programming",
      ar: "البرمجة كائنية التوجه (OOP)"
    },
    summary: {
      fi: "Luokat, oliot, __init__-konstruktori, periytyminen, kapselointi ja metodien ylikirjoitus.",
      en: "Classes, objects, __init__ constructor, inheritance, encapsulation, and method overriding.",
      ar: "الفئات، الكائنات، المنشئ __init__، التوريث، التغليف، وتجاوز الدوال (Overriding)."
    },
    theory: {
      fi: `
### Olio-ohjelmoinnin peruskäsitteet
* **Luokka (Class):** Piirustus tai mallipohja olioille (esim. \`class Auto:\`).
* **Olio (Object / Instance):** Luokasta luotu konkreettinen ilmentymä muistissa (esim. \`oma_auto = Auto("Tesla", 2024)\`).
* **__init__-metodi:** Luokan konstruktori (alustaja), joka suoritetaan automaattisesti, kun uusi olio luodaan.
* **self-parametri:** Viittaa luotavaan konkreettiseen olioon itseensä. Sillä sidotaan attribuutit olioon: \`self.nimi = nimi\`.

### Kapselointi ja tietojen suojaus (Encapsulation)
Pythonissa ei ole muiden kielten \`private\`-avainsanaa, vaan suojaus perustuu nimeämiskäytäntöihin:
* **Julkinen (Public):** \`self.nimi\` (vapaasti luettavissa ja muokattavissa).
* **Suojattu (Protected convention):** \`self._saldo\` (yksi alaviiva ilmaisee kehittäjille: käytä vain luokan sisällä tai aliluokissa).
* **Yksityinen (Private name mangling):** \`self.__salasana\` (kaksi alaviivaa muuttaa nimen sisäisesti muotoon \`_Luokka__salasana\`, estäen suoran vahingollisen ylikirjoituksen ulkoa).

### Periytyminen (Inheritance) ja super()
Aliluokka (subclass) voi periä yliluokan (parent class) attribuutit ja metodit:
\`\`\`python
class Sahkoauto(Auto):
    def __init__(self, merkki, akkukoko):
        super().__init__(merkki) # Kutsuu yliluokan konstruktoria
        self.akkukoko = akkukoko
\`\`\`

### Metodien ylikirjoitus (Method Overriding) ja polymorfismi
Aliluokka voi määritellä yliluokalta perityn metodin uudelleen omalla erikoistuneella toteutuksellaan. Polymorfismi tarkoittaa, että eri luokkien olioita voidaan käsitellä yhtenäisen rajapinnan kautta.
      `,
      en: `
### OOP Paradigms in Python
* **Class:** Blueprint or template defining states (attributes) and behaviors (methods).
* **Object / Instance:** Concrete entity instantiated from a class into memory.
* **The \`__init__\` Method:** Dunder constructor automatically invoked upon object instantiation.
* **The \`self\` Reference:** Explicit parameter referring to the bound instance itself.

### Encapsulation & Access Modifiers
Python embraces community conventions rather than strict compiler-enforced access keywords:
* **Public:** \`self.title\` (freely accessible).
* **Protected (Convention):** \`self._balance\` (single underscore hints private internal usage).
* **Private (Name Mangling):** \`self.__secret_key\` (double underscore triggers automatic identifier mangling to \`_Class__secret_key\` to prevent collision in subclasses).

### Inheritance & The super() Proxy
Subclasses inherit capabilities from parent classes:
\`\`\`python
class ElectricVehicle(Vehicle):
    def __init__(self, brand, battery_kwh):
        super().__init__(brand) # Delegates initialization to parent
        self.battery_kwh = battery_kwh
\`\`\`

### Method Overriding & Polymorphism
Subclasses can override inherited methods to customize behavior. Polymorphism allows uniform invocation of common methods across diverse object hierarchies.
      `,
      ar: `
### مفاهيم البرمجة كائنية التوجه في بايثون
* **الفئة (Class):** المخطط النموذجي (Blueprint) لإنشاء الكائنات.
* **الكائن (Object):** نسخة حقيقية يتم إنشاؤها من الفئة في الذاكرة.
* **المنشئ \`__init__\`:** دالة التهيئة التلقائية التي تعمل فور إنشاء الكائن.
* **المعامل \`self\`:** مؤشر يشير إلى الكائن الحالي لتخزين واستدعاء خصائصه.

### التغليف ومستويات الوصول (Encapsulation)
* **عام (Public):** \`self.name\` متاح للوصول والتعديل بحرية.
* **محمي (Protected):** \`self._balance\` بشرطة سفلية واحدة تنبه المطورين بعدم استخدامه خارجياً.
* **خاص (Private):** \`self.__pin\` بشرطتين سفليتين، يفعّل نظام التمويه (Name Mangling) لمنع التعديل المباشر.

### التوريث (Inheritance) ودالة super()
تتيح الفئات الفرعية وراثة خصائص الفئة الأم مع استخدام \`super().__init__()\` لاستدعاء منشئ الفئة الأم بأمان.

### تجاوز الدوال (Method Overriding) وتعدد الأشكال
يمكن للفئة الابن إعادة كتابة أي دالة موروثة لتقديم سلوك مخصص يلائمها.
      `
    },
    codeSnippet: `# Python Developer Guide - Topic 12: Object-Oriented Architecture

# 1. Kantaluokka kapseloinnilla
class Pankkitili:
    pankin_nimi = "Nordic Bank" # Luokkamuuttuja (Class attribute)

    def __init__(self, omistaja: str, alkusaldo: float = 0.0):
        self.omistaja = omistaja       # Julkinen attribuutti
        self.__saldo = alkusaldo       # Yksityinen attribuutti (Private)

    def talleta(self, maara: float) -> bool:
        if maara > 0:
            self.__saldo += maara
            return True
        return False

    def nosta(self, maara: float) -> bool:
        if 0 < maara <= self.__saldo:
            self.__saldo -= maara
            return True
        return False

    def get_saldo(self) -> float:
        """Turvallinen getter-metodi saldon lukemiseen."""
        return self.__saldo

# 2. Periytyminen ja metodin ylikirjoitus
class Saastotili(Pankkitili):
    def __init__(self, omistaja: str, alkusaldo: float, korkoprosentti: float = 3.5):
        super().__init__(omistaja, alkusaldo)
        self.korkoprosentti = korkoprosentti

    def maksa_korko(self):
        korko = self.get_saldo() * (self.korkoprosentti / 100)
        self.talleta(korko)
        print(f"Korkoa maksettu: {korko:.2f}€")

# Testataan toimintaa
tili = Saastotili("Matti Meikäläinen", 1000.0, korkoprosentti=4.0)
tili.talleta(500.0)
tili.maksa_korko()
print(f"Asiakkaan {tili.omistaja} loppusaldo: {tili.get_saldo():.2f}€")`,
    proTips: {
      fi: [
        "Käytä @property-dekoraattoria luodaksesi pythonic-tyylisiä gettereitä ja settereitä perinteisten get_x()-metodien sijaan.",
        "Suosi komposition (Composition) käyttöä perinnän (Inheritance) sijaan silloin, kun suhde ei ole aito 'is-a' vaan 'has-a'.",
        "Toteuta luokissasi aina __repr__- ja __str__-metodit selkeää virheenjäljitystä ja tulostamista varten."
      ],
      en: [
        "Use the \`@property\` decorator to implement Pythonic getters and setters with transparent validation.",
        "Favor composition over inheritance when relationships resemble 'has-a' rather than 'is-a'.",
        "Always implement \`__repr__\` and \`__str__\` dunder methods on domain classes for effortless debugging."
      ],
      ar: [
        "استخدم المزخرف `@property` لإنشاء دوال القراءة والتحقق بطريقة بايثونية أنيقة.",
        "فضّل التركيب (Composition) على التوريث (Inheritance) إذا كانت العلاقة تمثل 'يمتلك' بدلاً من 'هو نوع من'.",
        "احرص دائماً على تعريف دوال `__repr__` و `__str__` لتسهيل فحص وطباعة الكائنات أثناء التطوير."
      ]
    },
    quiz: {
      question: {
        fi: "Miten Python estää vahingollisen pääsyn kaksoisalaviivalla alkaviin attribuutteihin (esim. self.__saldo)?",
        en: "How does Python protect double-underscore attributes (e.g. self.__balance) against accidental external modification?",
        ar: "كيف تحمي بايثون الخصائص المسبوقة بشرطتين سفليتين (مثل self.__balance) من التعديل العفوي الخارجي؟"
      },
      options: [
        { id: "a", text: { fi: "Käyttöjärjestelmä asettaa muistiosoitteen vain luku -tilaan", en: "The operating system hardware-locks the memory segment", ar: "يقفل نظام التشغيل عنوان الذاكرة للقراءة فقط" } },
        { id: "b", text: { fi: "Name Mangling -mekanismilla, joka muuttaa nimeksi _LuokanNimi__saldo", en: "Via Name Mangling, which rewrites the internal name to _ClassName__balance", ar: "عبر آلية تمويه الأسماء (Name Mangling) التي تحول الاسم داخلياً إلى _ClassName__balance" } },
        { id: "c", text: { fi: "Python salaa muuttujan arvon AES-256-algoritmilla", en: "Python encrypts the value in memory with AES-256", ar: "تشفير القيمة في الذاكرة بخوارزمية AES-256" } },
        { id: "d", text: { fi: "Attribuutti poistetaan muistista heti luonnin jälkeen", en: "The attribute is automatically deleted after constructor exit", ar: "يتم حذف الخاصية فور الخروج من المنشئ" } }
      ],
      correctId: "b",
      explanation: {
        fi: "Python käyttää Name Mangling -menetelmää: kaksi alaviivaa muuttaa nimen automaattisesti muotoon _Luokka__attribuutti, mikä estää tahattoman törmäyksen.",
        en: "Python applies Name Mangling, automatically prefixing the identifier with _ClassName to avoid collisions.",
        ar: "تطبق بايثون أسلوب Name Mangling الذي يضيف اسم الفئة مسبوقاً بشرطة إلى اسم الخاصية لمنع تضارب الأسماء."
      }
    }
  }
];
