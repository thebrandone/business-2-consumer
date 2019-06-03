
<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    chartdata: {
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      datasets: [{
        type: Object,
        default: null
      }]
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}


// import { Bar } from 'vue-chartjs'

// export default {
//   extends: Bar,
//   data: () => ({
//     chartdata: {
//       labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
//       datasets: [
//         {
//           label: 'Data One',
//           backgroundColor: '#f87979',
//           data: [40, 20, 35, 50, 55, 80, 85]
//         }
//       ]
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false
//     }
//   }),

//   mounted () {
//     this.renderChart(this.chartdata, this.options)
//   }
// }
</script>

<style>
</style>

