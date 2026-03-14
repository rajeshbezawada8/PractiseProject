package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")
public class Demo {
    @GetMapping("/landing")
    public List<String> landing() {
        List<String> list = new ArrayList<>();
        list.add("Landing1");
        list.add("Landing2");
        list.add("Landing3");
        list.add("Landing4");
        list.add("Landing5");
        return list;
    }
}
