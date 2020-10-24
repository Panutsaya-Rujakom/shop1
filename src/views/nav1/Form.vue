<template>
	<el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
		<el-form-item label="Event name">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="Activity area">
			<el-select v-model="form.region" placeholder="Please select the activity area">
				<el-option label="Area one" value="shanghai"></el-option>
				<el-option label="Area two" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="Activity time">
			<el-col :span="11">
				<el-date-picker type="date" placeholder="Select date" v-model="form.date1" style="width: 100%;"></el-date-picker>
			</el-col>
			<el-col class="line" :span="2">-</el-col>
			<el-col :span="11">
				<el-time-picker type="fixed-time" placeholder="selection period" v-model="form.date2" style="width: 100%;"></el-time-picker>
			</el-col>
		</el-form-item>
		<el-form-item label="Instant delivery">
			<el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
		</el-form-item>
		<el-form-item label="Activity nature">
			<el-checkbox-group v-model="form.type">
				<el-checkbox label="Food/Restaurant online activities" name="type"></el-checkbox>
				<el-checkbox label="Ground push" name="type"></el-checkbox>
				<el-checkbox label="Offline theme activities" name="type"></el-checkbox>
				<el-checkbox label="Pure brand exposure" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="Special resources">
			<el-radio-group v-model="form.resource">
				<el-radio label="Online brand sponsorship"></el-radio>
				<el-radio label="Free for offline venues"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="Activity form">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">Create now</el-button>
			<el-button @click.native.prevent>cancel</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			}
		}
	}

</script>