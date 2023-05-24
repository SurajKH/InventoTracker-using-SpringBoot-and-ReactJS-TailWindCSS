package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Orders;


//we are considering the OrderRepository over here.
public interface OrderRepository extends JpaRepository<Orders,Long> {

}
