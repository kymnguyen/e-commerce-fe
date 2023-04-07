public class OrderDto
{
    public int Id { get; set; }
    public int CustomerId { get; set; }
    public int ShopId { get; set; }
    public DateTime OrderDate { get; set; }
    public OrderItem OrderItems { get; set; }
}

public class OrderItemDto
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public int ProductId { get; set; }
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }
}
