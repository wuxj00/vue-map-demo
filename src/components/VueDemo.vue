<script>
  import { mapState } from 'vuex';

  export default {
    name: 'VueDemo',
    template: `<div>hello world {{count}}</div>`,
    computed: mapState({
      count: state => state.pages1.count
    })
  };
</script>

<style scoped>

</style>
