export default {
  mode: 'GLOBAL',
  runningCommand: '',
  directory: null,
  loading: false,
  showModal: false,
  messages: [],
  cmdOptions: [],
  packages: {
    isLoading: false,
    totalInstalled: 0,
    active: null,
    packages: [],
    packagesOutdated: [],
    packageActions: [{
      text: 'Update',
      iconCls: 'refresh'
    }, {
      text: 'Uninstall',
      iconCls: 'trash'
    }]
  }
};
