// Copyright (c) 2022, mallikarjuna and contributors
// For license information, please see license.txt

 frappe.ui.form.on('Deduction Detail', {
	start_date:function(frm,cdt,cdn){
		var child = locals[cdt][cdn]
		frappe.call({
			method:"erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.last_date",
			args: {
				x: child.start_date
			},
			
			callback:function(r){
				console.log(r)
				frappe.model.set_value(cdt,cdn, 'end_date', r.message)
			}
		});
	}


});
frappe.ui.form.on('Deduction Detail', {
	amount:function(frm,cdt,cdn){
		var data = locals[cdt][cdn]
		
		frappe.call({
			"method": "erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.convertDateFormat",
			"args": {
				start_date:data.start_date
			},
			callback:function(r){
				// frappe.msgprint(r)
				var childTable = cur_frm.add_child("deduction_calculation");
				if (data.deduction_type=='Onetime'){
					childTable.month=r.message
					childTable.onetime = data.amount
					

					cur_frm.refresh_fields("deduction_calculation");
				}
				else 
					childTable.recurring = data.amount
					childTable.total =childTable.onetime
					childTable.balance =chilldTable.total-chilldTable.actualpaid_amount

					cur_frm.refresh_fields("deduction_calculation");

				// }
					
				
				
				// var child = cur_frm.add_child("deduction_calculation");
				// child.month=r.message
				
				// console.log(r)
				// frappe.model.set_value(cdt,cdn, 'month', r.message)
			}
		});
			
			

		
	
	}
});

frappe.ui.form.on('Deduction Detail', {
	amount:function(frm,cdt,cdn){
		var m = locals[cdt][cdn]
		frappe.call({
			method:"erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.amtt",
			args: {
				amt: fr.doc.amount
			},
			
			callback:function(r){
				console.log(r)
				

		
				
				frappe.throw(r.message)
			
			}
		});
	}


});
frappe.ui.form.on('Deduction Detail', {
	end_date:function(frm,cdt,cdn){
		var child = locals[cdt][cdn]
		frappe.call({
			method:"erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.validate",
			args: {
				x: child.start_date,
				y:child.end_date
			},
			
			callback:function(r){
				console.log(r)
				frappe.msgprint(r.message)
				

		
				
				
			
			}
		});
	}


});
// frappe.ui.form.on('Deduction Detail', {
// 	amount:function(frm,cdt,cdn){
// 		var data = locals[cdt][cdn]
		
// 		frappe.call({
// 			"method": "erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.amount",
// 			"args": {
// 				x:data.deduction_type,
// 				y:data.start_data
				
			
				
// 			},
// 			callback:function(r){
// 				frappe.msgprint(r)
// 				// var childTable = cur_frm.add_child("deduction_calculation");
// 				// childTable.onetime=r.message
// 				// cur_frm.refresh_fields("deduction_calculation");
// 			}
// 		});
			
			

		
	
// 	}
// });
// frappe.ui.form.on("Deduction Detail", {
// 	amount: function(frm, cdt, cdn) {
// 		var row = locals[cdt][cdn];
// 		if (row.amount) {
// 			frappe.model.with_doc("Deduction Calculation", row.Onetime, function() {
// 				var doc = frappe.model.get_doc("[Deduction Calculation]", row.Onettime);
// 				$.each(doc.deduction_calculation || [], function(i, r) {
// 					if(r.Onetime == frm.doc.amount) {
// 						var df = frappe.meta.get_docfield("Deduction Detail","amount", frm.doc.amount);
// 						df.options += ["\n" + r.amount];
// 					}
// 				})
// 			});
// 			frm.refresh_field("Deduction Detail")
// 		}
// 	}
// });


// frappe.ui.form.on('Deduction Calculation', {
// 	var child = cur_frm.add_child('project_item_list');
// 	child.fieldname="Text";
// 	cur_frm.refresh_fields('project_item_list');
// });
// frappe.ui.f// }
// frappe.ui.form.on("Deduction Calculation",{
// 	start_date:function(frm,cdt,cdn){
// 		var data=locals[cdt][cdn]
// 		if(data.month){
// 			frappe.ui.form.on("Deduction Detail",{
// 				start_date:function(frm){
// 					if(frm.doc.start_date){
// 						month=start_date
// 					}
// 				}
// 			});
// 		}
// 	}
// });
	// refresh: function(frm) {

	// }
	// employee:function(frm){
	// 	frm.set_value('employee','mallikarjunareddy')
		
	// }
	// employee:function(frm){
	// 	frappe.call({
	// 		method:"erpnext_mock_project.erpnext_mock_project.doctype.employee_deduction.employee_deduction.deductiontype",
	// 		args:{
	// 			"employee":frm.doc.employee
	// 		},
	// 		callbeck:function(r){
	// 			frappe.msgprint(r)
	// 		}

	// 	})
	// }
// frappe.ui.form.on("Deduction Detail",{
// 	deduction_type:function(frm,cdt,cdn){
// 	var data=locals[cdt][cdn]
// 	if(data.deduction_type==='Onetime'){
// frappe.ui.form.on("Deduction Detail",{
	// start_date:function(frm){
	// 	if(frm.doc.start_date){
	// 		frm.set_value('end_date',frappe.datetime.add_months(frm.doc.start_date,1))
	// 	}
	// }
// });
	
		
// 		// $.each(frm.doc.deduction_detail, function(index, field) {
			
// 				// frm.set_df_property(field.end_date, "read_only", 1);
// 		frm.fields_dict.deduction_detail.grid.update_docfield_property('end_date', "read_only", 1)
			
		// });
// 	// }
// cur_frm.cscript.end_date = function(doc, cdt, cd){
// 	cur_frm.set_value("end_date", frappe.datetime.add_months(doc.start_date, 1));
//   }
// // });
// frappe.ui.form.on("Deduction Detail",{
// 	start_date = frappe.datetime.get_today();
// 	end_date = frappe.datetime.add_months(start_date, 1)


// 	Vardate = new Date(),y = date.getFullYear(),m = date.getMonth();
// 	start_date = new Date(y,m,1);
// 	end_date = new Date(y,m+1,0);


// });
// 	onSelect: function() {
// 			start_date = $(this).datepicker("getDate");
// 			start_date.setDate(start_date.getDate() + interval);
// 			$(".txtend_date").datepicker("setDate", start_date);
// 			$(".txtend_date").datepicker("option", "minDate",
// 			$(this).datepicker("getDate"));
// 			$(this).change();
//   		}
// 	}).on("change", function() {
// 		$(".txtend_date").datepicker("setDate", start);
// 		$(".txtend_date").datepicker("option", "minDate",
// 		$(this).datepicker("getDate"));
// // });
// frappe.ui.form.on('Deduction Detail', 'end_date', function(frm){
// 	frm.set_value("end_date", frappe.datetime.add_months(frappe.datetime.nowmonth(), frm.doc.start_date));
// 	});
// frappe.ui.form.on("Deduction Detail",{ 
// 	start_date: function(frm){ 
// 		if(frm.doc.start_date) frm.set_value('end_date',frappe.datetime.add_months(frm.doc.start_date,1)); } });
// frappe.ui.form.on('Deduction Detail', {
// 	start_date: function(frm) {
// 	  const start_date = new Date(frm.doc.start_date);
// 	  start_date.setDate(start_date.getDate() + 30);
// 	  frm.doc.end_date = frappe.datetime.obj_to_str(start_date);
// 	  console.log(frm.doc.start_date, frm.doc.end_date)
// 	  frm.refresh_field('end_date')
// 	}
// frappe.ui.form.on('Deduction Calculation', {
// 	month:function(frm,cdt,cdn){
// 		var Date=new Date();
// 		console.log(Date)
// 		frappe.msgprint(Date)
// 		// frappe.model.set_value(cdt,cdn, 'month', Date)

// 	}
// });

