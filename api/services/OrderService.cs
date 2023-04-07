
public class OrderService
{
    private readonly IRepository<Customer> _customerRepository;
    private readonly IRepository<Product> _productRepository;
    private readonly IRepository<Shop> _shopRepository;
    public OrderService(IRepository<Customer> customerRepository,
                           IRepository<Product> productRepository,
                           IRepository<Shop> shopRepository)
    {
        _customerRepository = customerRepository;
        _productRepository = productRepository;
        _shopRepository = shopRepository;
    }
}