package it.peppemig.deliverooclone.controllers;

import it.peppemig.deliverooclone.models.Restaurant;
import it.peppemig.deliverooclone.services.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/restaurants")
public class RestaurantController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("")
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }

    // FIND RESTAURANTS BASED ON CATEGORY ID
    @GetMapping("/category/{categoryId}")
    public List<Restaurant> getRestaurantsByCategory(@PathVariable String categoryId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("category.$id").is(categoryId));
        List<Restaurant> restaurants = mongoTemplate.find(query, Restaurant.class);
        return restaurants;
    }
}
