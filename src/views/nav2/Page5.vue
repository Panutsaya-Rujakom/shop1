<template>
	<section>
		<!--Toolbar-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="Name"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">Inquire</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--List-->
		<template>
			<!-- <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;"> -->
				<el-table-column type="index" width="60">
				</el-table-column>
				<el-table-column prop="name" label="Name" width="150" sortable>
				</el-table-column>
				<!-- <el-table-column prop="sex" label="gender" width="100" :formatter="formatSex" sortable>
				</el-table-column> -->
				<el-table-column prop="age" label="age" width="110" sortable>
				</el-table-column>
				<el-table-column prop="birth" label="birthday" width="130" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="address" min-width="200" sortable>
				</el-table-column>
			</el-table>
		</template>

	</section>
</template>
<script>
	// import { getUserList } from '../../api/api';
	// import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				]
			}
		},
		// methods: {
		// 	//Gender display conversion
		// 	formatSex: function (row, column) {
		// 		return row.sex == 1 ? 'male' : row.sex == 0 ? 'Female' : 'unknown';
		// 	},
		// 	//Get user list
		// 	getUser: function () {
		// 		let para = {
		// 			name: this.filters.name
		// 		};
		// 		this.loading = true;
		// 		//NProgress.start();
		// 		getUserList(para).then((res) => {
		// 			this.users = res.data.users;
		// 			this.loading = false;
		// 			//NProgress.done();
		// 		});
		// 	}
		// },
		mounted() {
			// this.getUser();
		}
	};

</script>

<style scoped>

</style>