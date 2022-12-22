# Copyright (c) 2022, mallikarjuna and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe import _


class EmployeeDeduction(Document):
    pass

    # def deductiontype(employee):
    #     frappe.msgprint('hello')
     



from datetime import date, timedelta
import calendar
import datetime
@frappe.whitelist()
def last_date():
    x = date.today().replace(day=calendar.monthrange(date.today().year, date.today().month)[1])
    return x
    # x = datetime.datetime(2018, 6, 1)
    # print(x.strftime("%B"))

    # x = datetime.datetime.now()
    # return x.strftime("%B")

    # mydate = datetime.datetime.strptime('start_date', 'dd-mm-yy')
    # return mydate.month
    
    
    
    
    # x = date.today().replace(day=calendar.monthrange(date.today().year, date.today().month)[1])
    # if Month:
    #     x = date.today().replace(day=calendar.monthrange(date.today().year, date.today().month)[1])
    # return x
    # x=frm.get_field('start_date').get_value()
    # frappe.db.get_value('Deduction Detail','start_date')

# @frappe.whitelist()
# class deduction_detail:
#   def __init__(self):
#     self.start_date = start_date
#     print(start_date)

# class deduction_calculation(deduction_detail):
#     def __init__(self):
        
#         super().__init__()
        
        
        

# x = deduction_calculation()
# print(x)

# @frappe.whitelist()
# def mid_date():
#     for i in doc.deduction_detail:
#         if i==start_date:
#             return i  
@frappe.whitelist()
def convertDateFormat(start_date):
    x=str(start_date)
    date=datetime.datetime.strptime(start_date, '%Y-%m-%d')
    return date.strftime('%b-%y')
@frappe.whitelist()
def amtt(amt):
    if amt == 0:
        return "Enter the amount"
@frappe.whitelist()
def validate(x,y):
    if x>y:
        return "incorrect"
    else:
        return 'its all good'
        

    
    # x=frm.get_field('start_date').get_value()
    #  x = datetime.datetime(2018, 6, 1)
    #  return x.strftime("%B")
    # x = datetime.datetime.now()
    # # return x.strftime("%B")
    # mydate = datetime.datetime.strptime('2017-12-01', '%Y-%m-%d')
    # return mydate.month
    # mydate= datetime.date.today()
    # return mydate.month



    

    
    
    
        

    
    
    	
        
	
