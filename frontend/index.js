(async () => {
  const topology = await fetch(
    'https://code.highcharts.com/mapdata/countries/ug/ug-all.topo.json'
  ).then((response) => response.json());

  const response = await fetch('http://localhost:5000').then((response) =>
    response.json()
  );

  const data = response.map((item) => {
    return { code: item.district, value: item.number };
  });

  Highcharts.mapChart('container', {
    chart: {
      map: topology,
    },

    title: {
      text: 'Highcharts Maps basic demo',
    },

    subtitle: {
      text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ug/ug-all.topo.json">Uganda</a>',
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        verticalAlign: 'bottom',
      },
    },

    colorAxis: {
      min: 0,
    },

    series: [
      {
        data: data,
        name: 'Random data',
        joinBy: ['name', 'code'],
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
      },
    ],
  });
})();
