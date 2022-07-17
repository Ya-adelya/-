require: functions.js
require: slotfilling/slotFilling.sc
  module = sys.zb-common
  # Справочник на русском языке
require: name/name.sc
    module = sys.zb-common

theme: /
    
    state: Hello
        q!: * меня зовут $Name *
        script:
            setName($parseTree._Name.name);
        a: Привет, {{$session.name}}!

    state: Start
        q!: $regex</start>
        script:
            generateInitialNumber();
        a: Начнём, я загадал число - {{$session.initialNumber}}!

    state: Bye
        intent!: /пока
        a: Пока пока

    state: NoMatch
        event!: noMatch
        a: Я не понял. Вы сказали: {{$request.query}}

    state: Match
        event!: match
        a: {{$context.intent.answer}}