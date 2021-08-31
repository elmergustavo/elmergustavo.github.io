
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './header.scss';

const Header = ({ getObserver, onThemeChange }) => {
  const location = useLocation();
  const history = useHistory();
  const [isActive, setActive] = React.useState(true);
  const [isChanging, setChanging] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('about-me');
  const [currentEntry, setCurrentEntry] = React.useState('about-me');
  const [firstEntry, setFirstEntry] = React.useState(false);
  const [lastScroll, setLastScroll] = React.useState(window.scrollY);
  const [isActiveMobile, setActiveMobile] = React.useState(false);
  const [themeLoaded, setThemeLoaded] = React.useState(false);
  const [theme, setTheme] = React.useState('light');

  const pages = location.pathname.split('/').slice(2);

  function setThemeElement(el) {
    if (!el) {
      return;
    }
  
    el.setAttribute('data-theme', theme);
  
    if (el.children.length) {
      for (let i = 0; i < el.children.length; i++) {
        setThemeElement(el.children[i]);
      }
    }
  }

  React.useEffect(() => {
    if (themeLoaded) {
      const themeSaved = localStorage.getItem('theme');

      if (themeSaved !== theme) {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', theme);
      }

      setThemeElement(document.getElementById('root'));

      document.body.setAttribute('data-theme', theme);
      onThemeChange(theme);
    }
  }, [theme, themeLoaded]);

  if (pages[0] && pages[0].length && currentPage !== pages[0] && !firstEntry) {
    setCurrentPage(pages[0]);
    setFirstEntry(true);
  }

  function isPage(page) {
    if (currentPage === page) {
      return 'active';
    }

    return '';
  }

  window.onload = () => {
    if (!themeLoaded) {
      const themeSaved = localStorage.getItem('theme') || '';

      setThemeLoaded(true);

      if (themeSaved.length > 0 && themeSaved !== theme) {
        setTheme(themeSaved);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches && theme !== 'dark' && themeSaved.length === 0) {
        setTheme('dark');
      }
    }
  };

  window.onscroll = () => {
    const currentScroll = window.scrollY;

    setActive(currentScroll < lastScroll);
    setLastScroll(currentScroll);
    setActiveMobile(false);
  };

  getObserver(new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const entryPage = entry.target.getAttribute('data-page');

        if (entryPage && entryPage.length) {
          setChanging(true);
          setCurrentPage(entryPage);
          setCurrentEntry(entryPage);

          history.replace(`/#/${entryPage}`);

          setChanging(false);
        }
      }
    });
  }, { rootMargin: '0px 0px -85% 0px' }));

  function scrollToPage(page) {
    const element = document.querySelector(`[data-page="${page}"]`);

    if (element) {
      setTimeout(() => {
        setChanging(true);
        setCurrentEntry(page);
        setActive(page === 'about-me');
        setActiveMobile(false);

        element.scrollIntoView({
          behavior: 'smooth',
        });

        setChanging(false);
      }, 100);
    }
  }

  React.useEffect(() => {
    if (currentEntry !== currentPage && !isChanging) {
      scrollToPage(currentPage);
    }
  }, [currentEntry, currentPage, isChanging]);

  function changePage(page) {
    setCurrentPage(page);
    scrollToPage(page);
  }

  return (
    <header className={`header ${isActive ? 'header--active' : ''}`}>
      <div className="header__left">
        <div className="header__left--icon" />
        <div className="header__left--title">
	      	<a href="#" className="header__left--title">Elmer Gustavo Pú</a>
        </div>
      </div>
      <div className="header__right">
        <button className="header__right--toggle" onClick={() => setActiveMobile(!isActiveMobile)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
        </button>
        <ul className={`header__right--navigator ${isActiveMobile ? 'header__right--navigator--active' : ''}`}>
          <li className={isPage('about-me')}><Link to="/#/about-me" alt="About me section" onClick={() => changePage('about-me')}>
          About me
          </Link></li>
          <li className={isPage('projects')}><Link to="/#/projects" alt="My projects section" onClick={() => changePage('projects')}>
          Projects
          </Link></li>
          <li className={isPage('skills')}><Link to="/#/skills" alt="My skills section" onClick={() => changePage('skills')}>
          skills
          </Link></li>
          <li className={isPage('contact')}><Link to="/#/contact" alt="My contact section" onClick={() => changePage('contact')}>
          contact
          </Link></li>
          <div className="theme-switch">
            <span>Light/Dark Mode</span>
            <input type="checkbox" id="themeInput" checked={theme === 'dark'} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
            <label htmlFor="themeInput"></label>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
