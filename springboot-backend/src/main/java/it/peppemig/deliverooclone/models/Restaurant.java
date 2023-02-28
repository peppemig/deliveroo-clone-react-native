package it.peppemig.deliverooclone.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.*;

@Document(collection = "restaurants")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Restaurant {

    @Id
    @Field("_id")
    private String id;

    private String restName;

    private String restImgUrl;

    private Float rating;

    private Integer reviews;

    private String address;

    private String description;

    private Double lat;

    private Double lon;

    @DBRef
    private Category category;

    @DBRef
    private Featured featured;

}
