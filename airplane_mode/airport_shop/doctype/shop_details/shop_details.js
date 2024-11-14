// Copyright (c) 2024, Ahmed and contributors
// For license information, please see license.txt

frappe.ui.form.on("Shop Details", {
    onload: function (frm) {
        frappe.call({
          method: "frappe.client.get_list",
          args: {
            doctype: "Airport Shop Settings",
            fields: ["default_rent_amount", "enable_rent_reminder"],
          },
          callback: function (response) {
            if (response.message) {
              if (!frm.doc.default_price) {
                frm.set_value("default_price", response.message[0].default_rent_amount);
              }
              if (!frm.doc.shop_status) {
                frm.set_value(
                  "shop_status",
                  response.message[0].enable_rent_reminder
                );
              }
            }
          },
        });
      },
 });
