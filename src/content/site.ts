export type Service = { title: string; detail: string; price: string; image?: string }

export const site = {
  name: 'Мокко', shortName: 'МОККО', locale: 'ru', tagline: 'Салон, где легко выбрать своё',
  description: 'Маникюр, волосы, ресницы и макияж в одном месте. Каждый день с 09:00 до 21:00.',
  logo: 'images/logo.png', heroImage: 'images/hero.jpg',
  bookingUrl: 'https://sycret.ru/service/ob/?apikey=13578yz0012345ac&ismob=1',
  mapUrl: 'https://yandex.ru/maps/org/mokko/1161154288/',
  routeUrl: 'https://yandex.ru/maps?ll=40.427714%2C56.145617&mode=routes&rtext=~56.145617%2C40.427714&z=17',
  contact: { phone: '+7 (4922) 49-47-07', phoneHref: 'tel:+74922494707', whatsapp: 'https://wa.me/79308303305', telegram: 'https://t.me/mokko33', vk: 'https://vk.ru/mokko_33', address: 'Владимир, улица Лермонтова, 21Б', hours: 'Ежедневно, 09:00–21:00' },
  trust: { rating: '4.9', ratings: '791 оценка', reviews: '406 отзывов', award: 'Хорошее место 2026' },
}

export const services: Service[] = [
  { title: 'Маникюр', detail: 'Гель-лак, LUXIO, японский и пилочный маникюр', price: 'от 1 300 ₽', image: 'images/gallery-1.jpg' },
  { title: 'Педикюр', detail: 'SMART, экспресс и Golden Trace', price: 'от 1 500 ₽', image: 'images/gallery-2.jpg' },
  { title: 'Окрашивание', detail: 'Air Touch, сложное окрашивание и Global Keratin', price: 'от 4 500 ₽', image: 'images/haircut.jpg' },
  { title: 'Стрижки', detail: 'Женские, мужские и детские стрижки', price: 'от 800 ₽' },
  { title: 'Ресницы', detail: 'LED-наращивание и ламинирование', price: 'от 2 000 ₽', image: 'images/lashes.jpg' },
  { title: 'Брови и макияж', detail: 'Коррекция, укладка, дневной и свадебный макияж', price: 'от 800 ₽' },
]

export const prices = [['Стрижка женская', '1 590 ₽'], ['Мужская модельная стрижка', '1 290 ₽'], ['Маникюр с гель-лаком', 'от 2 300 ₽'], ['SMART-педикюр с LUXIO', '2 900 ₽'], ['Ламинирование ресниц', '2 000 ₽'], ['Вечерний макияж', '2 800 ₽']]
export const reviewThemes = [{ label: 'Персонал', value: '342 упоминания' }, { label: 'Маникюр', value: '134 упоминания' }, { label: 'Атмосфера', value: '80 упоминаний' }, { label: 'Чистота', value: '29 упоминаний' }]
