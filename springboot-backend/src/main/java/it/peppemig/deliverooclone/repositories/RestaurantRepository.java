package it.peppemig.deliverooclone.repositories;

import it.peppemig.deliverooclone.models.Restaurant;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RestaurantRepository extends MongoRepository<Restaurant, ObjectId> {
}
