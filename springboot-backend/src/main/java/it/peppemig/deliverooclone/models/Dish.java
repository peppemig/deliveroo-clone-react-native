package it.peppemig.deliverooclone.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;

@Document(collection = "dishes")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Dish {

    @Id
    @Field("_id")
    private String id;

    private String name;

    private String imgUrl;

    private String description;

    private BigDecimal price;

    @DBRef
    private Restaurant restaurant;
}
