import frappe
import unittest

class TestErrorDetection(unittest.TestCase):
    def test_intentional_syntax_errors(self):
        """This test contains deliberate errors to verify CI catches them"""
        # Correct usage (commented for reference)
        # frappe.msgprint("This is correct")
        
        # Intentional error 1: Extra 'g' in msgprint
        frappe.msggprint("This has extra g")  # CI should catch this
        
        # Intentional error 2: Misspelled method
        frappe.msgprnt("Misspelled method")  # CI should catch this
        
        # Intentional error 3: Wrong capitalization
        frappe.Msgprint("Wrong capitalization")  # CI should catch this
        
    def test_valid_usage(self):
        """This test uses correct syntax and should pass"""
        # This is the correct way
        frappe.msgprint("This is properly written")
        self.assertTrue(True)

def create_bad_syntax():
    """Function with deliberate errors outside test cases"""
    # Intentional error 4: Extra parentheses
    frappe.msgprint(("Extra parentheses"))  # CI might catch this
    
    # Intentional error 5: Missing import
    # (Testing if CI catches undefined names)
    non_existent_module.print_error("Test")  # CI should catch this