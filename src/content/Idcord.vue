<template>
  <div>
    <div class="idCardContent">
      <a-input v-model="idcord" style="width: 200px;margin-right: 10px;" placeholder="请输入15或18位身份证号" />
      <a-button type="primary" @click="test">校验</a-button>
    </div>
    <a-table style="width: 40%;margin: 20px auto 0" :rowKey="record => record.key" :dataSource="data" :columns="columns">

    </a-table>
  </div>
</template>

<script>
export default {
  name: 'Idcard',
  data () {
    return {
      idcord: '',
      data: [],
      areaID: {
        11: '北京',
        12: '天津',
        13: '河北',
        14: '山西',
        15: '内蒙古',
        21: '辽宁',
        22: '吉林',
        23: '黑龙江',
        31: '上海',
        32: '江苏',
        33: '浙江',
        34: '安徽',
        35: '福建',
        36: '江西',
        37: '山东',
        41: '河南',
        42: '湖北',
        43: '湖南',
        44: '广东',
        45: '广西',
        46: '海南',
        50: '重庆',
        51: '四川',
        52: '贵州',
        53: '云南',
        54: '西藏',
        61: '陕西',
        62: '甘肃',
        63: '青海',
        64: '宁夏',
        65: '新疆',
        71: '台湾',
        81: '香港',
        82: '澳门',
        91: '国外'
      },
      sexMap: { 0: '女', 1: '男' },
      columns: [
        {
          title: '年龄',
          dataIndex: 'age'
        },
        {
          title: '性别',
          dataIndex: 'sex'
        },
        {
          title: '籍贯',
          dataIndex: 'address'
        }
      ]
    }
  },
  methods: {
    // 610121199408217994
    test () {
      const msg = {}
      let code = this.idcord
      if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)) {
        this.$message.error('身份证号格式错误')
        return false
      } else if (!this.areaID[parseInt(code.substr(0, 2))]) {
        this.$message.error('身份证号地址编码错误')
        return false
      } else {
        if (code.length === 18) {
          code = code.split('')
          var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]
          var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ]
          var sum = 0
          var ai = 0
          var wi = 0
          for (var i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
          }
          if (String(parity[sum % 11]) !== code[17].toUpperCase()) {
            this.$message.error('身份证号校验位错误')
            return false
          } else {
            msg.address = this.areaID[this.idcord.substr(0, 2)]
            msg.key = this.data.length
            this.data.push(msg)
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .idCardContent {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
