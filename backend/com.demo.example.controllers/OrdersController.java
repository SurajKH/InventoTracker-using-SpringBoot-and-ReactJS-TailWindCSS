package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Orders;
import com.example.demo.repository.OrderRepository;


@RestController
//@CrossOrigin("http://localhost:3000")
@CrossOrigin("http://localhost:3000")
public class OrdersController {

	//we basically tend to autowire the orders Repository
	@Autowired
	private OrderRepository orderepository;
	
	@PostMapping("/ordersapi/v1/addNewOrder")
	Orders addNewOrders(@RequestBody Orders orders)
	{
		//return productsRepository.save(products);
		return orderepository.save(orders);
	}
	
	@GetMapping("/ordersapi/v1/orderStore")
	public List<Orders> AllOrders()
	{
		return orderepository.findAll();
	}
	
}