import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";
import { title } from "process";

export const salesType = defineType({
  name: "sales",
  title: "Sales",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Sales title",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Sales Description",
    }),
    defineField({
      name: "discountAmount",
      type: "number",
      title: "Discount Amount",
      description: "Amount off in percentage or fixed value",
    }),
    defineField({
      name: "couponCode",
      type: "string",
      title: "Coupon Code",
    }),
    defineField({
      name: "validFrom",
      type: "datetime",
      title: "Valid from",
    }),
    defineField({
      name: "validUntil",
      type: "datetime",
      title: "Valid Untill",
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "Is Active",
      description: "Toggle to activate/deActivate sale",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(select) {
      const status = select.isActive ? "Active" : "InActive";
      return {
        title: select.title,
        subtitle: `${select.discountAmount}%off - Code ${select.couponCode} - ${status}`,
      };
    },
  },
});
