public class Shop : BaseEntity
{
    public override int Id { get; set; }
    public string? Name { get; set; }
    public string? Location { get; set; }

    public ICollection<Product>? Products { get; set; }
    public ICollection<Order>? Orders { get; set; }
}

