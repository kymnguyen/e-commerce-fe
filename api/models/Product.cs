public class Product: BaseEntity
{
    public override int Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }

    public int ShopId { get; set; }
    public Shop Shop { get; set; }
    public ICollection<OrderItem> OrderItems { get; set; }
}
