import React, { useEffect } from "react";

import MaterialTable from "material-table";

import ActionLogs from "~/store/ducks/log";

import { useSelector, useDispatch } from "react-redux";

const Log = () => {
  const data = useSelector((state) => state.log.logs);

  const dispatch = useDispatch();

  function changer(array) {
    const log = [];
    for (var i in array) {
      if (i < array.length - 1) {
        var json = JSON.parse(array[i].trim());

        log.push(json);
      }
    }
    return log;
  }

  useEffect(() => {
    dispatch(ActionLogs.readLogRequest());
  }, [dispatch]);

  return (
    <>
      <MaterialTable
        style={{
          height: "auto",
          boxShadow: "none",
        }}
        title="Log"
        data={changer(data)}
        localization={{
          header: {
            actions: "Ações",
          },

          body: {
            emptyDataSourceMessage: "Não existe",
            filterRow: {
              filterTooltip: "Procurar",
            },
          },
          toolbar: {
            searchTooltip: "Procurar",
            searchPlaceholder: "Procurar",
          },
        }}
        columns={[
          {
            title: "Url",
            field: "url",
          },
          {
            title: "Method",
            field: "method",
          },
          {
            title: "Usuario",
            field: "user_modified.email",
          },

          {
            title: "Data da modificação",
            field: "data_modified",
          },
          {
            title: "Horario da modificação",
            field: "hour_modified",
          },
        ]}
      />
    </>
  );
};

export default Log;
