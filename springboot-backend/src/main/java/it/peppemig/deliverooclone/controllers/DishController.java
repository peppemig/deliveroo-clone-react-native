package it.peppemig.deliverooclone.controllers;

import it.peppemig.deliverooclone.models.Dish;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/dishes")
public class DishController {

    @Autowired
    private MongoTemplate mongoTemplate;

    @GetMapping("/{restaurantId}")
    public List<Dish> getDishesByRestaurantId(@PathVariable String restaurantId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("restaurant.$id").is(restaurantId));
        List<Dish> dishes = mongoTemplate.find(query, Dish.class);
        return dishes;
    }
}
