public class Order: BaseEntity
{
    public override int Id { get; set; }
    public int CustomerId { get; set; }
    public int ShopId { get; set; }
    public DateTime OrderDate { get; set; }
    public Customer Customer { get; set; }
    public Shop Shop { get; set; }
    public ICollection<OrderItem> OrderItems { get; set; }
}

public class OrderItem
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }

    public Order Order { get; set; }
    public Product Product { get; set; }
}