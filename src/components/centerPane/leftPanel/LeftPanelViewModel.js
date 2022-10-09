import dataController from '../../../controllers/dataController';

const leftPanelViewModel = (props) => {
    const data = dataController.getData();
    console.log('leftPane', data);

    return { data };
};

export { leftPanelViewModel };