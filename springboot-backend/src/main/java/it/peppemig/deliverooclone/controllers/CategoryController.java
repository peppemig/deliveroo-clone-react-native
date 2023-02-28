package it.peppemig.deliverooclone.controllers;

import it.peppemig.deliverooclone.models.Category;
import it.peppemig.deliverooclone.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping
    public ResponseEntity<List<Category>> allCategories(){
        return new ResponseEntity<List<Category>>(categoryService.allMovies(), HttpStatus.OK);
    }
}
