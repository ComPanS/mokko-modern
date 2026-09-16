import { Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [{ href: '#services', label: 'Услуги' }, { href: '#reviews', label: 'Отзывы' }, { href: '#prices', label: 'Цены' }, { href: '#contacts', label: 'Контакты' }]

export function SiteLayout() {
  return <div className="site-shell">
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Мокко, наверх"><img src={`${import.meta.env.BASE_URL}${site.logo}`} alt="Мокко" /></a>
      <nav aria-label="Основная навигация">{navigation.map(({ href, label }) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="header-booking" href={site.bookingUrl} target="_blank" rel="noreferrer">Записаться <span aria-hidden="true">↗</span></a>
    </header>
    <main><Outlet /></main>
    <footer className="site-footer"><p>{site.name} · Владимир, улица Лермонтова, 21Б</p><p><a href={site.contact.phoneHref}>{site.contact.phone}</a></p><p>Ежедневно 09:00–21:00</p></footer>
  </div>
}
