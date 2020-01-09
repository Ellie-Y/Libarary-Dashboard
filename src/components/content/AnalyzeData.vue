<template>
  <!-- Charts style come from the gallery of echarts website -->
  
  <!-- Display statistics  -->
  <div class="chart-wrapper">
    <div id="myChart"></div>
    <div class="bar">
      <div id="myBarChart"></div>
      <p>Percent of books loaned</p>
    </div>
  </div>

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['loanData', 'allBookData', 'allUserData']),
      totalUser() {
        return this.allUserData.length;
      },
      totalBook() {
        return this.allBookData.length;
      },
      loanedBook() {
        return this.loanData.length;
      }
    },
    mounted() {
      this.drawLine()
      this.drawBarChart()
    },
    watch: {
      totalUser() {
        this.drawLine()
      },
      totalBook() {
        this.drawLine()
        this.drawBarChart()
      },
      loanedBook() {
        this.drawBarChart()
      }
    },
    methods: {
      drawLine() {
        // Chart initialisation
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        let totalUser = this.totalUser
        let totalBook = this.totalBook
        // Draw the chart
        myChart.setOption({
          textStyle: {
            fontSize: '14'
          },
          title: {
            text: 'The total amount of users and books'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['Users', 'Books'],
              axisTick: {
                alignWithLabel: true
              },
              axisLabel: {
                fontSize: '18'
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                fontSize: '16'
              }
            }
          ],
          series: [
            {
              type: 'bar',
              barWidth: '30%',
              data: [
                {
                  value: totalUser,
                  itemStyle: {
                    color: '#1F78B4'
                  }
                },
                {
                  value: totalBook,
                  itemStyle: {
                    color: '#539dc4'
                  }
                }
              ],
              label: {
                show: true,
                position: 'insideTop'
              }
            }
          ]
        })
      },
      drawBarChart() {
        let myBarChart = this.$echarts.init(document.getElementById('myBarChart'));
        let loanedPer = (this.loanedBook / this.totalBook)*100;
        let leftPer = 100 - loanedPer;
        myBarChart.setOption({
          title: {
            text: `${loanedPer.toFixed(2)}%`,
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#0580f2',
              fontSize: '40'
            }
          },
          color: ['#b0d4fb'],
          series: [
            {
              type: 'pie',
              clockWise: true,
              radius: ['50%', '66%'],
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [
                {
                  value: loanedPer,
                  name: '01',
                  itemStyle: {
                    normal: {
                      color: {
                        colorStops: [
                          {
                            offset: 0,
                            color: '#00cefc'
                          },
                          {
                            offset: 1,
                            color: '#367bec'
                          }
                        ]
                      },
                      label: {
                        show: false
                      },
                      labelLine: {
                        show: false
                      }
                    }
                  }
                },
                {
                  name: '02',
                  value: leftPer.toFixed(2)
                }
              ]
            }
          ]
        })
      }
    }
  }

</script>

<style scoped>

  .chart-wrapper {
    position: absolute;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  #myChart {
    width: 400px;
    height: 400px;
  }
  #myBarChart {
    width: 300px;
    height: 300px;
  }
  .bar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .bar p {
    font-size: 18px;
    color: #4c4357;
    font-weight: 500;
  }

</style>