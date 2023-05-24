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
@Table(name="orders_table")
public class Orders {
//lets define the class over here.
	
	/*
	  Attributes:
	  
	  orderID
	  orderCategory
	  orderCountry
	  orderStatus
	  orderTimeStamp
	  
	 */
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	private long orderId;
	private String orderCountry;
	private String orderCategory;
	private String orderStatus;
	private String orderDate;
	
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	public String getOrderCountry() {
		return orderCountry;
	}
	public void setOrderCountry(String orderCountry) {
		this.orderCountry = orderCountry;
	}
	public String getOrderCategory() {
		return orderCategory;
	}
	public void setOrderCategory(String orderCategory) {
		this.orderCategory = orderCategory;
	}
	public String getOrderStatus() {
		return orderStatus;
	}
	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
	public String getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(String orderDate) {
		this.orderDate=orderDate;
	}
	
	
	
}