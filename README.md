Product recommendation quiz test:
- link on top menu "Product Quiz"
- will go to the static page for the quiz whenre there is a template for the quiz.
- there are sections to fill out the intro step (header and intro text) 
- template is "quiz-page" and the section is called "Product quiz"

- The quiz uses the "Quiz" metaobjects and the section file "main-quiz.liquid"
- Tailwind setup but only used and compile a few classes as it clashes with Dawn prefixes and would require to setup a prefix etc also due to time constraint
- files modified/added:  
   - assets/section-product-quiz.css
        - modified:   sections/main-quiz.liquid
        - modified:   src/tailwind.css
        - modified:   tailwind.config.js
        - modified:   templates/index.json
        - assets/quiz.js
        - assets/section-main-quiz.css
        - sections/test.quiz.liquid
