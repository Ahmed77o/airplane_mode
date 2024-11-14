// Copyright (c) 2024, Ahmed and contributors
// For license information, please see license.txt

 frappe.ui.form.on("Rent Request", {
    refresh: function(frm) {
        // Add a custom button on the form
        frm.add_custom_button(__(' Rent Contract '), function() {
            // Action to perform when the button is clicked
        var new_application = frappe.model.get_new_doc('Rent Contract');          
        new_application.rent_request_id = frm.doc.name;
        
        frappe.set_route('Form', 'Rent Contract',new_application.name);
     
    }, __('ADD')); // Group under "Utilities"
    }
 });
