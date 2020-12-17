import './App.css';
import React, { Component } from 'react'
import Chart from "chart.js";
import 'chartjs-plugin-annotation';

class EvolSocioProStack extends Component {
  chartRef = React.createRef();
  componentDidMount() {
      const myChartRef = this.chartRef.current.getContext("2d");
      new Chart(myChartRef, {
          type: "line",
          data: {
              //Bring in data
              labels: ["2007", "2012", "2017" ],
              datasets: [
                {
                  borderColor: "#3E1026", 
                  backgroundColor: "#3E1026", 
                  fill: true,
                  label: "Cadres",
                  yAxisID: 'A',
                  data: [26.6, 28.1, 29.3],
                  type: 'line'
                }, 
                {
                  borderColor: "#64193C",
                  backgroundColor: "#64193C",
                  fill: true,
                  label: "Artisans, commerçants, chefs d'entreprise",
                  yAxisID: 'A',
                  data: [3.1, 3.3, 3.6],
                  type: 'line'
                },
                {
                  borderColor: "#CBA5B7",
                  backgroundColor: "#CBA5B7",
                  fill: true,
                  label: "Employés",
                  yAxisID: 'A',
                  data: [13.7, 13.1, 12.3],
                  type: 'line',
                },
               
              ]
          },
          options: {

            scales: {
              xAxes: [{
                stacked: true,
                gridLines: {
                  display: false,
                },
              }],
              yAxes: [{
                stacked: true, 
                id: 'A',
                type: 'linear',
                position: 'left',
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  max: 100
                },
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Pourcentage cumulé'
                }
              }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Encours'
                }
              }]
            },
        
          },
          
      });
  }
  render() {
      return (
          <div>
              <canvas
                  id="myChart"
                  ref={this.chartRef}
              />
          </div>
      )
  }
}

class EvolSocioPro extends Component {
  chartRef = React.createRef();
  componentDidMount() {
      const myChartRef = this.chartRef.current.getContext("2d");
      new Chart(myChartRef, {
          type: "line",
          data: {
              //Bring in data
              labels: ["2007", "2012", "2017" ],
              datasets: [
                {
                  borderColor: "#3E1026", 
                  // backgroundColor: "#1DE9B6", 
                  fill: false,
                  label: "Cadres",
                  yAxisID: 'A',
                  data: [100, 107.9, 110.6],
                  type: 'line'
                }, 
                {
                  borderColor: "#64193C",
                  // backgroundColor: "#7D204C",
                  fill: false,
                  label: "Artisans, commerçants, chefs d'entreprise",
                  yAxisID: 'A',
                  data: [100, 106.5, 115.8],
                  type: 'line'
                },
                {
                  borderColor: "#7d204c",
                  // backgroundColor: "#7D204C",
                  fill: false,
                  label: "Employés",
                  yAxisID: 'A',
                  data: [100, 97.7, 90.0],
                  type: 'line',
                  pointStyle: 'triangle',
                  borderWidth : 3,
                },
                {
                  borderColor: "#A46281", 
                  // backgroundColor: "green", 
                  fill: false,
                  label: "Ouvriers",
                  yAxisID: 'A',
                  data: [100, 93.4, 82.2],
                  type: 'line',
                  borderWidth : 3,
                  pointRadius: 0,
                  borderDash : [0,6],
                  borderCapStyle : 'round'
                }, 
                {
                  borderColor: "#CBA5B7", 
                  // backgroundColor: "green", 
                  fill: false,
                  label: "Professions intermédiaires",
                  yAxisID: 'A',
                  data: [100, 101.5, 96.5],
                  type: 'line',
                  borderDash: [10,5],
                },
              ]
          },
          options: {

            scales: {
              xAxes: [{
                // stacked: true,
                gridLines: {
                  display: false,
                },
              }],
              yAxes: [{
                // stacked: true, 
                id: 'A',
                type: 'linear',
                position: 'left',
                ticks: {
                  beginAtZero: true,
                  min: 80,
                  max: 120
                },
                gridLines: {
                  // display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Indice base 100'
                }
              }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Encours'
                }
              }]
            },
        
          },
          
      });
  }
  render() {
      return (
          <div>
              <canvas
                  id="myChart"
                  ref={this.chartRef}
              />
          </div>
      )
  }
}



class LineGraphShort extends Component {
  chartRef = React.createRef();
  componentDidMount() {
      const myChartRef = this.chartRef.current.getContext("2d");
      new Chart(myChartRef, {
          type: "bar",
          data: {
              //Bring in data
              labels: [
                       "2016 T1", "2016 T2", "2016 T3", "2016 T4",
                       "2017 T1", "2017 T2", "2017 T3", "2017 T4",
                       "2018 T1", "2018 T2", "2018 T3", "2018 T4",
                       "2019 T1", "2019 T2", "2019 T3", "2019 T4",
                       "2020 T1", "2020 T2", "2020 T3"
              ],
              datasets: [
                {
                  fill: false,
                  borderColor: "#1DE9B6", 
                  label: "Réservations",
                  yAxisID: 'A',
                  data: [28661, 34082, 28317, 36109, 31700, 33489, 30108, 35397, 31083, 35403, 28254, 35180, 31791, 34943, 28932, 35216, 26014, 21142, 24308],
                  type: 'line'
                }, 
                {
                  fill: false,
                  borderColor: "#7D204C",
                  label: "Mise en vente",
                  yAxisID: 'A',
                  data: [28038, 38297, 27559, 33986, 31550, 38181, 25636, 31275, 34868, 38190, 26475, 28397, 26058, 34629, 25007, 26968, 20272, 19365, 18902],
                  type: 'line'
                },
                {
                  fill: true,
                  borderColor: "silver",
                  label: "Encours",
                  yAxisID: 'B',
                  data: [101119, 106238, 104562, 103743, 105034, 111331, 109024, 108273, 113576, 117815, 118040, 112825, 109425, 111617, 109586, 103848, 101020, 98267, 95238]
                }
              ]
          },
          options: {
            scales: {
              xAxes: [{
                gridLines: {
                  display: false,
                },
              }],
              yAxes: [{
                id: 'A',
                type: 'linear',
                position: 'left',
                ticks: {
                  beginAtZero: true,
                  max: 60000
                },
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Nombre de mise en vente, de réservations'
                }
              }, {
                id: 'B',
                type: 'linear',
                position: 'right',
                ticks: {
                  beginAtZero: true,
                  max: 120000
                },
                gridLines: {
                  display: false,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Encours'
                }
              }]
            },
            annotation: {
              annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 17000,
                borderColor: 'white',
                borderWidth: 0,
                label: {
                  xAdjust: 50,
                  fontSize: 14,
                  fontColor: '#7D204C',
                  backgroundColor: 'silver',
                  content: "-46% sur un an ",
                  enabled: true,
                  position: 'right'
                }
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 38000,
                borderColor: 'white',
                borderWidth: 0,
                label: {
                  xAdjust: 50,
                  fontSize: 14,
                  fontColor: '#1DE9B6',
                  backgroundColor: 'silver',
                  content: "-41% sur un an ",
                  enabled: true,
                  position: 'right'
                }
              }],
              drawTime: 'beforeDatasetsDraw'
            }
          },
          
      });
  }
  render() {
      return (
          <div>
              <canvas
                  id="myChart"
                  ref={this.chartRef}
              />
          </div>
      )
  }
}


class LineGraph extends Component {
  chartRef = React.createRef();
  componentDidMount() {
      const myChartRef = this.chartRef.current.getContext("2d");
      new Chart(myChartRef, {
          type: "line",
          data: {
              //Bring in data
              labels: [
                       "1995 T1", "1995 T2", "1995 T3", "1995 T4",
                       "1996 T1", "1996 T2", "1996 T3", "1996 T4",
                       "1997 T1", "1997 T2", "1997 T3", "1997 T4",
                       "1998 T1", "1998 T2", "1998 T3", "1998 T4",
                       "1999 T1", "1999 T2", "1999 T3", "1999 T4",
                       "2000 T1", "2000 T2", "2000 T3", "2000 T4",
                       "2001 T1", "2001 T2", "2001 T3", "2001 T4",
                       "2002 T1", "2002 T2", "2002 T3", "2002 T4",
                       "2003 T1", "2003 T2", "2003 T3", "2003 T4",
                       "2004 T1", "2004 T2", "2004 T3", "2004 T4",
                       "2005 T1", "2005 T2", "2005 T3", "2005 T4",
                       "2006 T1", "2006 T2", "2006 T3", "2006 T4",
                       "2007 T1", "2007 T2", "2007 T3", "2007 T4",
                       "2008 T1", "2008 T2", "2008 T3", "2008 T4",
                       "2009 T1", "2009 T2", "2009 T3", "2009 T4",
                       "2010 T1", "2010 T2", "2010 T3", "2010 T4",             
                       "2011 T1", "2011 T2", "2011 T3", "2011 T4",
                       "2012 T1", "2012 T2", "2012 T3", "2012 T4",
                       "2013 T1", "2013 T2", "2013 T3", "2013 T4",
                       "2014 T1", "2014 T2", "2014 T3", "2014 T4",
                       "2015 T1", "2015 T2", "2015 T3", "2015 T4",
                       "2016 T1", "2016 T2", "2016 T3", "2016 T4",
                       "2017 T1", "2017 T2", "2017 T3", "2017 T4",
                       "2018 T1", "2018 T2", "2018 T3", "2018 T4",
                       "2019 T1", "2019 T2", "2019 T3", "2019 T4",
                       "2020 T1", "2020 T2", "2020 T3"
              ],
              datasets: [
                  {
                      fill: false,
                      borderColor: "#1DE9B6", 
                      label: "Réservations",
                      data: [14483, 13922, 15422, 16965, 16151, 17507, 17194, 19234, 17724, 17646, 20422, 22236, 21103, 22401, 21460, 25772, 29793, 31544, 21426, 15240, 16875, 18234, 17836, 20101, 20062, 19072, 18481, 20284, 21212, 20431, 18916, 22548, 25016, 24989, 25029, 25402, 28094, 28858, 25769, 26698, 29300, 31096, 27825, 30100, 31968, 28256, 30648, 31634, 35945, 31689, 28337, 27733, 25536, 20448, 15425, 14312, 24076, 26801, 25854, 25313, 25332, 28318, 28647, 26746, 21577, 22818, 25758, 28898, 19247, 20962, 20934, 23021, 20200, 22759, 19922, 22147, 19879, 20535, 18497, 24006, 23933, 26833, 22603, 26725, 28661, 34082, 28317, 36109, 31700, 33489, 30108, 35397, 31083, 35403, 28254, 35180, 31791, 34943, 28932, 35216, 26014, 21142, 24308]
                  }, 
                  {
                    fill: false,
                    borderColor: "#7D204C",
                    label: "Mise en vente",
                    data: [16530, 18870, 15842, 15135, 15704, 15510, 16039, 15896, 16964, 17273, 18126, 19944, 20714, 21190, 22232, 25523, 34564, 24982, 16687, 16796, 16429, 20544, 19457, 20330, 18821, 19644, 18958, 19597, 19211, 18475, 19440, 21329, 20383, 22901, 21241, 25273, 26312, 27979, 28491, 28208, 30256, 32941, 30136, 35241, 34816, 32372, 38422, 39224, 38769, 36300, 33514, 34360, 27588, 26129, 19984, 14214, 14734, 18679, 19275, 21161, 24919, 29479, 25163, 24763, 27572, 29089, 30651, 28859, 30103, 31120, 28936, 23917, 27485, 27692, 20899, 22909, 21696, 24426, 20465, 24545, 23621, 28893, 22526, 26972, 28038, 38297, 27559, 33986, 31550, 38181, 25636, 31275, 34868, 38190, 26475, 28397, 26058, 34629, 25007, 26968, 20272, 19365, 18902]
                }
              ]
          },
          options: {
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
            },
            annotation: {
              annotations: [
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'x-axis-0',
                value: 10,
                borderColor: 'white',
                borderWidth: 0,
                label: {  
                  yAdjust: 220,
                  fontSize: 14,
                  fontColor: 'black',
                  backgroundColor: 'silver',
                  content: 'Crise financière de 2008',
                  enabled: true,
                  position: 'bottom',
                }
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'x-axis-0',
                value: 10,
                borderColor: 'white',
                borderWidth: 0,
                label: {  
                  yAdjust: 250,
                  fontSize: 14,
                  fontColor: '#7D204C',
                  backgroundColor: 'white',
                  content: '- 34% sur un an',
                  enabled: true,
                  position: 'bottom',
                }
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'x-axis-0',
                value: 10,
                borderColor: 'white',
                borderWidth: 0,
                label: {  
                  yAdjust: 280,
                  fontSize: 14,
                  fontColor: '#1DE9B6',
                  backgroundColor: 'white',
                  content: '- 40% sur un an',
                  enabled: true,
                  position: 'bottom',
                }
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'x-axis-0',
                value: 10,
                borderColor: 'white',
                borderWidth: 0,
                label: {  
                  yAdjust: 220,
                  fontSize: 14,
                  fontColor: 'black',
                  backgroundColor: 'silver',
                  content: 'Crise sanitaire de 2020',
                  enabled: true,
                  position: 'right',
                }
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'x-axis-0',
                value: 10,
                borderColor: 'white',
                borderWidth: 0,
                label: {  
                  yAdjust: 250,
                  fontSize: 14,
                  fontColor: '#7D204C',
                  backgroundColor: 'white',
                  content: '- 34% sur un an',
                  enabled: true,
                  position: 'right',
                }
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'x-axis-0',
                value: 10,
                borderColor: 'white',
                borderWidth: 0,
                label: {  
                  yAdjust: 280,
                  fontSize: 14,
                  fontColor: '#1DE9B6',
                  backgroundColor: 'white',
                  content: '- 40% sur un an',
                  enabled: true,
                  position: 'right',
                }
              },
              ],
              drawTime: 'beforeDatasetsDraw'
            }
          },
          
      });
  }
  render() {
      return (
          <div>
              <canvas
                  id="myChart"
                  ref={this.chartRef}
              />
          </div>
      )
  }
}

function App() {
  return (
    <div className="App">

      <div className="header-image p-5 m-5" style={{ backgroundColor:'green'}}>
        <div className='header-title' style={{maxWidth:'1140px', 'margin-left': 'auto', 'margin-right': 'auto', 'padding-left': '2rem', 'padding-right': '2rem', paddingTop:'200px', paddingBottom:'200px'}}  >
          TITRE DE l'ARTICLE 
        </div>
      </div>

      <div style={{maxWidth:'1140px', display:'block', 'margin-left': 'auto', 'margin-right': 'auto', 'padding-left': '2rem', 'padding-right': '2rem'}}  >
        <p className="introduction" style={{marginTop:'2rem'}}>
          Depuis le début de la crise Covid, les analyses se multiplient dans de nombreux domaines pour anticiper à quoi ressemblera “le monde d’après”. Le marché de l’immobilier est lui aussi affecté par la crise, et son futur apparaît aujourd’hui incertain. Sans prétendre prédire l’évolution du cours de ce marché, cet article vise à en expliquer les déterminants essentiels, et les principaux enjeux. 
        </p>

        {/*---------------------------------------------------------------------------------*/}
        <h2 className='sub-title' style={{marginTop:'4rem'}}> I. Les spécificités du marché de l’immobilier </h2>
        <p className="text" style={{marginTop:'2rem'}}>
        Le marché de l’immobilier est régi par les lois de tout marché économique : le prix des biens immobiliers résulte d’une rencontre entre l’offre et la demande de la part des ménages. 
        Pour essayer d’anticiper les prix futurs de ce marché, il faut par conséquent analyser les différents déterminants de ces deux facteurs de formation des prix.
        </p>
        <p className="text bold" style={{marginTop:'1rem'}}>
        La demande dépend à la fois de la capacité d’achat des agents, et de leur volonté d’achat.
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        La capacité d’achat correspond au pouvoir d’achat immobilier individuel. 
        Ce dernier est déterminé par le revenu des agents, mais également par leurs conditions de crédit.
        En effet, en raison du montant élevé des biens immobiliers, un tel achat requiert dans 80 % des cas un crédit bancaire. 
        Par conséquent, la capacité d’achat des ménages peut être modifiée tant par une politique fiscale (par exemple une hausse des impôts pour rembourser la dette « Covid ») que par une politique monétaire (une baisse des taux d’intérêt par exemple).
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Il ne faut pas négliger également la volonté d’achat des agents, qui va dépendre de leurs anticipations. 
        En effet, un achat immobilier représente pour les ménages un investissement majeur, ils vont donc adapter leur stratégie d’achat selon leur anticipation du cours du marché, c’est-à-dire de la valeur des biens immobiliers.
        Dès lors, si les prix stagnent ou commencent à baisser, les agents vont retarder leur achat, anticipant un prix plus intéressant dans quelques mois.
        Peut ainsi apparaître une « prophétie auto-réalisatrice » : parce qu’ils anticipent que les prix vont baisser suite à la crise les agents retardent leur achat, cette baisse de la demande provoquant effectivement une baisse des prix immobiliers.
        </p>

        <p className="text bold" style={{marginTop:'2rem'}}>
        L’offre obéit quant à elle à certaines spécificités du marché immobilier. Les biens immobiliers sont en effet soumis à une double contrainte : les délais de construction d’une part, la régulation afférente au marché d’autre part.
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Les délais de construction rendent l’offre de biens immobiliers rigide à court terme, puisque même si la demande augmente subitement les producteurs ne peuvent y répondre immédiatement.
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        La régulation immobilière tend également à rigidifier l’offre de logements, puisque les constructions doivent respecter les règles d’urbanisme, limitant parfois l’offre de constructions nouvelles.
        En ce sens, la loi ELAN adoptée en 2018 vise à simplifier les normes pour permettre de construire davantage de logements et plus vite.
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Enfin, les offreurs de biens immobiliers sont également influencés par leurs anticipations, puisqu’ils peuvent réduire leurs projets de construction s’ils anticipent une baisse de la demande, due par exemple à une importante baisse des revenus.
        </p>

        {/*<p style={{marginLeft:'4rem', marginTop:'2rem'}} className="text bold">Commercialisation de logements neufs en France</p>
        <div style={{margin:'4rem', marginTop:'1rem', marginBottom:'1rem'}}> <LineGraph/> </div>
  <p style={{marginLeft:'4rem'}} className="text source">Source : www.statistiques.developpement-durable.gouv.fr</p>*/}

        <p style={{marginLeft:'4rem', marginTop:'2rem'}} className="text bold">Commercialisation de logements neufs en France</p>
        <div style={{margin:'4rem', marginTop:'1rem', marginBottom:'1rem'}}> <LineGraphShort/> </div>
        <p style={{marginLeft:'4rem'}} className="text source">Source : www.statistiques.developpement-durable.gouv.fr</p>

        <p className="text" style={{marginTop:'1rem'}}>
          [Commentaire ?]
        </p>
        <p className="text" style={{marginTop:'2rem'}}>
        Cette rigidité de l’offre à court terme permet de parler d’un marché dépendant de la demande à court terme.
        Par exemple, le modèle économétrique mobilisé par la Caisse des dépôts montre que la hausse des prix depuis 2015 s’explique largement par de meilleures capacités d’emprunt. 
        </p>

        {/*---------------------------------------------------------------------------------*/}
        <h2 className='sub-title' style={{marginTop:'4rem'}}> II. Les enjeux liés au marché de l’immobilier </h2>
        <p className="text" style={{marginTop:'1rem'}}>
        Les enjeux du marché spécifique qu’est l’immobilier sont souvent négligés dans le débat public. Pourtant, ces derniers sont multiples. 
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        L’évolution des prix de l’immobilier affecte directement le pouvoir d’achat des ménages, principalement par le biais des évolutions des loyers qu’ils paient. Or, ce dernier a ensuite une influence sur la mise en place des politiques économiques. Ainsi, la faible progression des coûts liés à l’immobilier en Allemagne a d’autant facilité les réformes structurelles mises en place au début des années 2000 pour gagner en compétitivité, puisque la faible progression des salaires était rendue plus acceptable par un pouvoir d’achat moins limité par les dépenses immobilières. 
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Le marché immobilier est également un facteur clé dans la progression des inégalités sociales, entre ceux déjà détenteurs d’un bien immobilier et ceux qui n’en possèdent pas.
        En effet, les personnes disposant d’un logement dans une grande ville en France ont vu la valeur de leur bien augmenter au cours des dernières décennies, rendant d’autant plus difficile l’accession à la propriété pour les jeunes ménages primo-accédants. Un rapport du Sénat pointe ainsi que sont particulièrement concernés les “jeunes ménages primo-accédants, les familles, et bien sûr les catégories populaires, celles-ci étant contraintes de s'éloigner des centres-villes pour s'installer dans les périphéries parfois éloignées”. 
        Alors même que les inégalités sociales sont de plus en plus étudiées et débattues dans l’espace public, le facteur des coûts immobiliers reste pourtant peu discuté.
        </p>

        <p className="text" style={{marginTop:'1rem'}}>
        Les prix de l’immobilier jouent également un rôle dans l’attractivité des villes françaises, entraînant des évolutions sociologiques profondes dans les plus grandes villes de France.
        Le politologue Jérôme Fourquet montre ainsi que Paris est par exemple devenue majoritairement habitée par des ménages de catégories socio-professionnelles supérieures, en raison de l’évolution des prix immobiliers ayant entraîné un éloignement des classes populaires vers les banlieues.  
        </p>
        
        <p style={{marginLeft:'4rem', marginTop:'2rem'}} className="text bold">Evolution de la population selon la catégorie socioprofessionnelle à Paris (Option 1)</p>
        <div style={{margin:'4rem', marginTop:'1rem', marginBottom:'1rem'}}> <EvolSocioPro/> </div>
        <p style={{marginLeft:'4rem'}} className="text source">Source : Insee</p>

        <p style={{marginLeft:'4rem', marginTop:'2rem'}} className="text bold">Evolution des catégories socio-professionnelles à Paris (Option 2)</p>
        <div style={{margin:'4rem', marginTop:'1rem', marginBottom:'1rem'}}> <EvolSocioProStack/> </div>
        <p style={{marginLeft:'4rem'}} className="text source">Source : Insee</p>

        <p className="text" style={{marginTop:'1rem'}}>
        La mesure des prix immobiliers est également un sujet en soi, puisque des débats existent sur la manière de prendre en compte ce marché spécifique dans les mesures macro-économiques.
        Par exemple, l’économiste Philippe Herlin critique la méthodologie employée par l’INSEE pour mesurer l’évolution du pouvoir d’achat des ménages français.
        Selon lui, le coût du logement est largement minoré par cet institut. Ainsi, pour l’INSEE le coût des logements vaut pour 6% du budget total des ménages et le coût de remboursements bancaires est considéré comme nul. 
        Dès lors, une prise en compte différente du coût du logement entraînerait une réévaluation du pouvoir d’achat des ménages à la baisse. 
        </p>

        <h2 className='sub-title' style={{marginTop:'4rem'}}> III. Les différents scénarios envisageables d’évolution du marché immobilier </h2>
        <p className="text" style={{marginTop:'1rem'}}>
        Plusieurs scénarios d’évolutions des prix immobiliers peuvent être considérés : un effondrement des prix (1), une baisse des prix (2) et une hausse des prix (3). 
        </p>
        <p className="text bold" style={{marginTop:'2rem'}}>
          1. Un effondrement des prix peu probable 
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Selon les économistes de la Caisse des dépôts, la répétition du scénario de la crise de 2008, où certains marchés immobiliers européens s’étaient effondrés, est peu crédible.
         En effet, du côté de l’offre on n’observe pas « d’emballement de la construction nationale », au sens où il n’existerait pas de bulle immobilière en France.
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Du côté de la demande, on observe une certaine résilience qui s’explique par plusieurs facteurs.
        Une première explication, structurelle, tient en ce que depuis la crise de 2008 l’endettement privé est davantage surveillé par les autorités de régulation. 
        Par exemple, ce dernier figure parmi les nouveaux indicateurs macroéconomiques proposés par la Banque de France.
        Le scénario espagnol de 2008, ou la crise financière avait révélé l’ampleur du niveau d’endettement privé, semble donc impossible.
        Une seconde raison, conjoncturelle, réside dans l’intervention massive de l’État français pour soutenir l’économie. Cette intervention, notamment avec le chômage partiel, a pu largement réduire l’impact de la crise sur la demande.
        </p>
        <p className="text bold" style={{marginTop:'2rem'}}>
          2. Une baisse des prix possible 
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        La baisse des prix ne pourrait s’expliquer par une offre trop abondante par rapport à la demande, puisque rien n’indique que l’offre de logement soit trop élevée en France.
         Il faut donc se concentrer ici sur les déterminants de la demande.
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Si l’on n’observe pas d’effondrement, une baisse de la demande reste possible.
        Elle s’expliquerait tout d’abord par une baisse de revenus, malgré l’intervention de l’État.
        De plus, une moindre consommation due à un effet « Ricardo-Barro » n’est pas à exclure : face à l’endettement massif de l’État, les agents anticipent que cette dette émise se traduira dans le futur par des hausses d’impôts, donc réduisent leur consommation présente.
        Enfin, le rôle des anticipations du cours du marché immobilier peut jouer, comme rappelé précédemment avec une anticipation auto-réalisatrice.
        </p>
        <p className="text bold" style={{marginTop:'2rem'}}>
          3. Une hausse des prix envisageable
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Une hausse des prix pourrait résulter de deux facteurs : une forte réduction de l’offre de logement, ou une hausse de la demande de biens immobiliers. 
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Une hausse des prix pourrait s’expliquer par une pénurie d'offres, résultant d’une baisse des chantiers de construction suite à la Covid. Toutefois, malgré un faible nombre de permis de construire délivrés ces derniers mois, la majorité des chantiers ont été repoussés et non annulés.
         Ainsi, un ralentissement durable des chantiers de construction paraît peu concevable. 
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        Une hausse de la demande est davantage probable.
         Selon les économistes Patrick Artus et Olivier Pastré, l’intervention massive des banques centrales pour faire face à la crise pourrait avoir comme conséquence une hausse des prix de l’immobilier. Ces dernières ont en effet réalisé une énorme création monétaire en monétisant les dettes émises par les Etats : la base monétaire de l’OCDE a ainsi augmenté de 70 % en 2020. Or, depuis trente ans la corrélation « classique » entre création monétaire et inflation des biens et services a disparu,
          au profit d’une nouvelle corrélation entre création monétaire et hausse du prix des actifs financiers et immobiliers.
        </p>

        <p style={{marginLeft:'4rem', marginTop:'2rem'}} className="text bold">GRAPHIQUE </p>
        <div style={{margin:'4rem', marginTop:'1rem', marginBottom:'1rem'}}> {/* </> */} </div>
        <p style={{marginLeft:'4rem'}} className="text source">Source : </p>

        <p className="text" style={{marginTop:'1rem'}}>
        Ces économistes expliquent cette corrélation par le mécanisme de rééquilibrage de portefeuille : la création monétaire implique que les épargnants détiennent initialement trop de monnaie par rapport à leur souhait, ils essaient donc de se débarrasser de cette monnaie en achetant des actifs (actions, obligations, immobilier). A l’équilibre, la structure des portefeuilles est rééquilibrée par la hausse du prix des actifs due à ces achats.
         Ce mécanisme a pu être observé au Japon dans les années 1980, ou dans l’OCDE dans les années 1990.
        </p>
        <p className="text" style={{marginTop:'1rem'}}>
        </p>

        <p className="text" style={{marginTop:'5rem'}}>
          end
        </p>
      </div>

      
    </div>
  );
}

export default App;
