import Vue from 'vue';
import VueI18n from 'vue-i18n';
import LocalesPT from '../locales/pt-br.json';

Vue.use(VueI18n);

export default ({app}) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: 'pt-br',
    fallbackLocale: 'pt-br',
    messages: {
      'pt-br': LocalesPT,
    },
  });

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }

    return `/${app.i18n.locale}/${link}`;
  };
};
