import { createI18n } from 'vue-i18n'

import uz from '../locale/uz.json'
import ru from '../locale/ru.json'
import en from '../locale/en.json'

const messages = {
    uz,
    ru,
    en
}

const i18n = createI18n({
    legacy: false,
    locale: 'ru',
    messages
})

export default i18n
