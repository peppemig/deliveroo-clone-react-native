package it.peppemig.deliverooclone.controllers;

import com.mongodb.BasicDBObject;
import it.peppemig.deliverooclone.models.Category;
import it.peppemig.deliverooclone.models.Featured;
import it.peppemig.deliverooclone.models.Restaurant;
import it.peppemig.deliverooclone.repositories.RestaurantRepository;
import it.peppemig.deliverooclone.services.RestaurantService;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("")
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.getAllRestaurants();
    }

    @GetMapping("/{restaurantId}")
    public Optional<Restaurant> getRestaurantById(@PathVariable String restaurantId) {
        return restaurantService.getRestaurantById(new ObjectId(restaurantId));
    }

    // FIND RESTAURANTS BASED ON CATEGORY ID
    @GetMapping("/category/{categoryId}")
    public List<Restaurant> getRestaurantsByCategory(@PathVariable String categoryId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("category.$id").is(categoryId));
        List<Restaurant> restaurants = mongoTemplate.find(query, Restaurant.class);
        return restaurants;
    }

    // FIND RESTAURANTS BASED ON FEATURED ID
    @GetMapping("/featured/{featuredId}")
    public List<Restaurant> getRestaurantsByFeatured(@PathVariable String featuredId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("featured.$id").is(featuredId));
        List<Restaurant> restaurants = mongoTemplate.find(query, Restaurant.class);
        return restaurants;
    }

}
