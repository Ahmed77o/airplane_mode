// Copyright (c) 2024, Ahmed and contributors
// For license information, please see license.txt

frappe.ui.form.on("Rent Contract", {
	onload: function(frm) {
        frappe.call({
            method: 'airplane_mode.airport_shop.doctype.rent_contract.rent_contract.get_preivios_app_data', 
            
            
            
            args: {
                name: frm.doc.rent_request_id  
            },
            callback: function(r) {
                if (r.message) {
                    
                    frm.set_value('shop_name', r.message.shop_name);
                    frm.set_value('shop_number', r.message.shop_number);
                    frm.set_value('shop_price', r.message.shop_price);
                    frm.set_value('airport', r.message.airport);
                    frm.set_value('shop_area', r.message.shop_area);
                    frm.set_value('shop_status', r.message.shop_status);
                    frm.set_value('tenant', r.message.tenant);
                    frm.set_value('tenant_phone', r.message.tenant_phone);
                    frm.set_value('tenant_email', r.message.tenant_email);
                    frm.set_value('contract_start_date', r.message.contract_start_date);
                    frm.set_value('contract_expiry_date', r.message.contract_expiry_date);
                    
                }
            }});

	},
});
