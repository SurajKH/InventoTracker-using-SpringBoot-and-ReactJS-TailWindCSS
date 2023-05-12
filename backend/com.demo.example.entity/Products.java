package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

//lets define the Product Entity over here.
//we are defining the entity over here.

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Data
@Table(name="products_table")
public class Products {
//lets define the class over here.
	
	/*
	  Attributes:ProductID,ProductName,ProductCategory,ProductManfacturingCompany
	  ProductManufacturingCountry
	 */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long productId;
	private String productName;
	private String productCategory;
	private String productCompany;
	private String productCountry;
	
	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductCategory() {
		return productCategory;
	}
	public void setProductCategory(String productCategory) {
		this.productCategory = productCategory;
	}
	public String getProductCompany() {
		return productCompany;
	}
	public void setProductCompany(String productCompany) {
		this.productCompany = productCompany;
	}
	public String getProductCountry() {
		return productCountry;
	}
	public void setProductCountry(String productCountry) {
		this.productCountry = productCountry;
	}
	
	
}
