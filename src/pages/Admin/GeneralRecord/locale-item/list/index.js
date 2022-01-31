import React, {useState, useEffect} from 'react';

import {Creators as CreatorsLocaleItem} from '~/store/ducks/locale-item';

import {Creators as CreatorsSectors} from '~/store/ducks/sectors';
import {useDispatch, useSelector} from 'react-redux';

import MaterialTable from 'material-table';

import AccordingSectors from '../../sectors';
import AccordingUnits from '../../units';

export default function LocalItem() {
  const [selectedRow, setSelectedRow] = useState('');
  const data = useSelector((state) => state.locale.locale_items);
  const loading = useSelector((state) => state.locale.locale_item_loading);

  const visible = useSelector((state) => state.sectors.sectors_list.visible);

  const handleShowAccordingSectors = (id) => {
    dispatch(CreatorsSectors.showAccordingSectors(id));
  };

  const handleShowNewLocaleItem = () => {
    dispatch(CreatorsLocaleItem.showNewLocaleItem());
  };

  const handleShowUpdateLocaleItem = (data) => {
    dispatch(CreatorsLocaleItem.showUpdateLocaleItem(data));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CreatorsLocaleItem.readLocaleItemRequest());
  }, [dispatch]);

  return (
    <div>
      <MaterialTable
        style={{boxShadow: '#fff'}}
        data={data}
        title='Local'
        loading={loading}
        columns={[
          {
            title: 'Código',
            field: 'id',
          },
          {
            title: 'Descrição',
            field: 'description',
          },
        ]}
        onRowClick={(evt, selectedRow) => {
          setSelectedRow(selectedRow);
        }}
        options={{
          headerStyle: {
            color: '#a4a4a4',
          },
          actionsCellStyle: {color: '#a4a4a4'},
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow && selectedRow.tableData.id === rowData.tableData.id
                ? 'rgba(164, 164, 164,0.2)'
                : '#FFF',
          }),
        }}
        localization={{
          header: {
            actions: 'Ações',
          },

          body: {
            emptyDataSourceMessage: 'Não existe',
            filterRow: {
              filterTooltip: 'Procurar',
            },
          },
          toolbar: {
            searchTooltip: 'Procurar',
            searchPlaceholder: 'Procurar',
          },
        }}
        actions={[
          {
            icon: 'add',
            tooltip: 'Cadastrar uma nova localidade.',
            isFreeAction: true,
            onClick: (event) => {
              handleShowNewLocaleItem();
            },
          },

          {
            icon: 'edit',
            tooltip: 'Editar informações.',
            onClick: (event, rowData) => {
              handleShowUpdateLocaleItem(rowData);
            },
          },
          {
            icon: 'delete',
            tooltip: 'Excluir',
            onClick: (event, rowData) => {
              dispatch(CreatorsLocaleItem.deleteLocaleItemRequest(rowData.id));
            },
          },

          {
            icon: 'visibility',
            hidden: !visible,
            tooltip: 'Mostrar setores.',
            onClick: (event, rowData) => {
              handleShowAccordingSectors(rowData.id);
            },
          },
        ]}
      />

      <AccordingSectors />
      <AccordingUnits />
    </div>
  );
}
