<template>
    <div id="user" v-cloak>
        <div class="add">
            用户信息:
            <input type="text" v-model="name">
            密码：
            <input type="text" v-model="pwd"> 
            地址：
            <input type="text" v-model="address">
            <br/>
            <input type="button" value="添加" @click="addUser">
        </div>
        <div>
            <table class="tb">  
                <tr>
                    <th>编号</th>
                    <th>用户名称</th>
                    <th>密码</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
                <tr v-for="(v, i) in list" :key="i">
                    <td>{{ i+1 }}</td>
                    <td>{{ v.name }}</td>
                    <td>{{ v.pwd }}</td>
                    <td>{{ v.address }}</td>
                    <td>
                        <a href="#" @click.prevent= "deleteUser(v.id)">删除</a>
                    </td> 
                </tr>
                <!-- v-if 的条件表达式 -->
                 <tr v-if="list.length === 0">
                    <td colspan="4">没有数据</td>
                 </tr>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name: "userPage",
        data() {
            return {
                name: "",
                pwd: "",
                address: "",
                list: []
            }
        },
        created() {
            this.axios.get('http://localhost:10000/userVue3/queryAll')
            .then((res) => {
                this.list = res.data
                console.log(res);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            })
        },
        methods: {
            addUser() {
                // 发送POST请求，添加数据
                this.axios.post('http://localhost:10000/userVue3/addUser', {
                    name: this.name,
                    pwd: this.pwd,
                    address: this.address
                }) .then((res) => {
                    const { status } = res;
                    if (status === 201) {
                        //?????? 已经拿到最新的新增后数据，下面的 unshift又在数据中插入一条
                        this.getData();
                    }
                })
                this.getData();
                this.name = "";
                this.pwd = "";
                this.address = "";
            },
            getData() {
                this.axios.get('http://localhost:10000/userVue3/queryAll')
                .then((res) => {
                    const { status, data } = res;
                    if (status === 200) {
                        this.list = data;
                    }
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                })
            },
            deleteUser(id) {
                console.log(id);
                if (confirm("确定要删除吗？")) {
                    this.axios.delete('http://localhost:10000/userVue3/deleteUser?id=' + id)
                    .then((res) => {
                        console.log(res);
                        this.getData();
                    })
                } 
            }
        }
    }
</script>

<style scoped>
  #app {
    width: 600px;
    margin: 10px auto;
  }

  .tb {
    border-collapse: collapse;
    width: 100%;
  }

  .tb th {
    background-color: #0094ff;
    color: white;
  }

  .tb td,
  .tb th {
    padding: 5px;
    border: 1px solid black;
    text-align: center;
  }

  .add {
    padding: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
</style>
