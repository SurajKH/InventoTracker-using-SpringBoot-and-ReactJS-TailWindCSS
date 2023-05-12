package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Products;
import com.example.demo.repository.ProductsRepository;
import com.example.demo.services.ProductService;

@RestController
//@CrossOrigin("http://localhost:3003")
@CrossOrigin("http://localhost:3003")
public class ProductsController {

	//we basically tend to autowire the products Repository
	@Autowired
	private ProductsRepository productsRepository;
	
	@PostMapping("/productsapi/v1/addNewProduct")
	Products addNewProduct(@RequestBody Products products)
	{
		return productsRepository.save(products);
	}
	
	@GetMapping("/productsapi/v1/productStore")
	public List<Products> AllProducts()
	{
		return productsRepository.findAll();
	}
	
}
