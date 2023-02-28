package it.peppemig.deliverooclone.repositories;

import it.peppemig.deliverooclone.models.Featured;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeaturedRepository extends MongoRepository<Featured, ObjectId> {
}
