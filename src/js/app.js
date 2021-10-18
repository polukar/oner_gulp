
import { menu } from './project/menu';
import { sliders } from './project/sliders';
import { footer } from './project/footer';
import { counter } from './project/counter';
import { popups } from './project/popups';
import { tags } from './project/tags';
// import { table } from './project/table';
import { select } from './project/select';
import { accardeon } from './project/accardeon';
import { basket } from './project/basket';
import { form } from './project/form';


let app = {
  init() {
    menu();
    sliders();
    footer();
    counter();
    popups();
    tags();
    select();
    accardeon();
    basket();
    form();

    // table();

    // хотел написать сккрипт под адаптвцию таблиц но дизайнер решил что всеп таблицы будут адаптироваться по разному принципу и на десктопе разный дизайн
    // можно написать но у меня не бюыло время
  }
};
app.init();