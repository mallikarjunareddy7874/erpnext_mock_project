import frappe

def report(doc,method):
    doc.absent_days_of_emp=doc.total_no_of_days_of_emp - doc.present_days_of_emp