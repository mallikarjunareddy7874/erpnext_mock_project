import frappe

frappe.msggprint("This should fail immediately")  

class TestErrorDetection(unittest.TestCase):
    def test_errors(self):
        """Now all errors will execute"""
        frappe.msgprnt("Misspelled")  
        frappe.Msgprint("Wrong case") 
        non_existent_module.error()  
        
    def test_valid(self):
        frappe.msgprint("Correct usage")
        self.assertTrue(True)