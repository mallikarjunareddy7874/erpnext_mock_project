import frappe

def report(doc,method):
    
    doc.t_absent_days =  doc.t_working_days - doc.t_present_days    