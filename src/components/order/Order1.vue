  <template>
     <div class="content-container" direction="vertical">
        <!-- input -->
         <div>
            <el-container class="content-row">
                <div class="input-tip">商品名称</div>
                <div class="input-field">
                    <el-input v-model="queryParam.good"></el-input>
                </div>

                <div class="input-tip">
                    收货人:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.consignee"></el-input>
                </div>

                <div class="input-tip">
                    支付时间:
                </div>
                <div class="input-field">
                    <el-date-picker
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    v-model="queryParam.payTime">
                    </el-date-picker>
                </div>
            </el-container>

            <el-container class="content-row">
                <div class="input-tip">
                    用户名称:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.name"></el-input>
                </div>
                <div class="input-tip">
                    手机号:
                </div>
                <div class="input-field">
                    <el-input v-model="queryParam.phone"></el-input>
                </div>
                <div class="input-tip">
                    发货时间:
                </div>
                <div class="input-field">
                    <el-date-picker
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    v-model="queryParam.sendTime">
                    </el-date-picker>
                </div>                
            </el-container>
         </div>

         <!-- action -->
         <div class="content-row">
            <el-container>
                <el-button type="primary" @click="requestData">筛选</el-button> 
            </el-container>
        </div>

        <!-- list -->
        <div>
            <el-tabs type="card" @tab-click="handleClick">
                <el-tab-pane label="全部"></el-tab-pane>
                <el-tab-pane label="未支付"></el-tab-pane>
                <el-tab-pane label="已支付"></el-tab-pane>
                <el-tab-pane label="待发货"></el-tab-pane>
                <el-tab-pane label="已发货"></el-tab-pane>
                <el-tab-pane label="支付超时"></el-tab-pane>
            </el-tabs>
        </div>

     </div>
</template>

<script>
    import Mock from '../../mock/Mock.js'
    export default {
        name: "OrderPage",
        data() {
            return {
                // 订单列表数据
                orderList: [],
                // 筛选订单的参数
                queryParam: {
                    good: '',
                    consignee: '',
                    phone: '',
                    name: '',
                    payTime: '',
                    sendTime: ''
                }
            }
        },
        methods: {
            // 模拟请求数据
            requestData() {
                this.$message({
                    type: 'success',
                    message: '筛选请求参数：' + JSON.stringify(this.queryParam)
                })
                this.orderList = Mock.getOrder(this.$route.params.type);
            },
            // 切换Tab, 刷新数据
            handleClick(tab) {
                this.$message({
                    type: 'success',
                    message:'切换tab刷新数据：' + tab.props.label
                })
                this.orderList = Mock.getOrder(this.$route.params.type);
            }


        }
    }
</script>