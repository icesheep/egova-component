import Tab from './Tab';
import Table from './Table';
import Pagination from './Pagination';
import Modal from './Modal';

var EgovaComponent = {
  Tab: Tab,
  Table: Table,
  Pagination: Pagination,
  Modal: Modal,
  Test: function(){console.log('object,22222222222!!!!!!!!!!');}
}

// console.log(Tab,Table);

// module.exports = EgovaComponent;
// module.exports =  require('./egova/index.js');
export default {
  Tab: Tab,
  Table: Table,
  Pagination: Pagination,
  Modal: Modal,
  Test: function(){console.log('object,22222222222!!!!!!!!!!');}
}